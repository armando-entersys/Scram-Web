#!/usr/bin/env python3
"""
Script para desplegar cambios en el servidor de producción
Ejecuta git pull y reinicia el contenedor Docker
"""

import subprocess
import sys

def run_command(cmd, description):
    """Ejecuta un comando y muestra el resultado"""
    print(f"\n{'='*60}")
    print(f"Ejecutando: {description}")
    print(f"{'='*60}")

    try:
        result = subprocess.run(
            cmd,
            shell=True,
            check=True,
            capture_output=True,
            text=True,
            timeout=120
        )

        if result.stdout:
            print(result.stdout)
        if result.stderr:
            print(f"STDERR: {result.stderr}", file=sys.stderr)

        print(f"✓ {description} completado exitosamente\n")
        return True

    except subprocess.CalledProcessError as e:
        print(f"✗ Error ejecutando {description}", file=sys.stderr)
        print(f"Código de salida: {e.returncode}", file=sys.stderr)
        if e.stdout:
            print(f"STDOUT: {e.stdout}", file=sys.stderr)
        if e.stderr:
            print(f"STDERR: {e.stderr}", file=sys.stderr)
        return False

    except subprocess.TimeoutExpired:
        print(f"✗ Timeout ejecutando {description}", file=sys.stderr)
        return False

def main():
    """Función principal de despliegue"""
    print("\n" + "="*60)
    print("DESPLEGANDO CAMBIOS EN SERVIDOR DE PRODUCCIÓN")
    print("="*60 + "\n")

    # Paso 1: Hacer git pull en el servidor
    git_pull_cmd = (
        'gcloud compute ssh prod-server '
        '--zone=us-central1-c '
        '--command="cd /srv/scram-frontend && git pull origin master"'
    )

    if not run_command(git_pull_cmd, "Git pull en producción"):
        print("\n✗ Error al hacer git pull. Abortando despliegue.", file=sys.stderr)
        sys.exit(1)

    # Paso 2: Reiniciar el contenedor Docker
    restart_cmd = (
        'gcloud compute ssh prod-server '
        '--zone=us-central1-c '
        '--command="cd /srv/scram-frontend && docker-compose restart nextjs"'
    )

    if not run_command(restart_cmd, "Reinicio de contenedor Docker"):
        print("\n✗ Error al reiniciar Docker. Verificar manualmente.", file=sys.stderr)
        sys.exit(1)

    # Paso 3: Verificar que el sitio esté funcionando
    print("\n" + "="*60)
    print("VERIFICANDO DESPLIEGUE")
    print("="*60 + "\n")

    health_check_cmd = (
        'gcloud compute ssh prod-server '
        '--zone=us-central1-c '
        '--command="curl -s -o /dev/null -w \'%{http_code}\' http://localhost:3000"'
    )

    run_command(health_check_cmd, "Health check del sitio")

    print("\n" + "="*60)
    print("✓ DESPLIEGUE COMPLETADO EXITOSAMENTE")
    print("="*60)
    print("\nURL de producción: https://scram2k.com")
    print("Landing page: https://scram2k.com/l-ads-seguridad-electronica")
    print("\n")

if __name__ == "__main__":
    main()
