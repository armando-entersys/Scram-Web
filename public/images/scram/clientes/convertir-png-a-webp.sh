#!/bin/bash

# Función para convertir archivos PNG a WebP
convert_to_webp() {
    input_file="$1"
    output_file="${input_file%.*}.webp"  # Cambia la extensión del archivo de entrada a .webp

    # Verifica si el archivo de entrada es un archivo PNG
    if [[ "$input_file" == *.png ]]; then
        # Convierte el archivo PNG a WebP
        cwebp -quiet "$input_file" -o "$output_file"
        echo "Convertido: $input_file -> $output_file"
    fi
}

# Función para recorrer recursivamente los archivos en un directorio
recursive_convert() {
    local dir="$1"
    local file

    # Itera sobre los archivos y directorios en el directorio actual
    for file in "$dir"/*; do
        if [ -d "$file" ]; then
            # Si es un directorio, llama recursivamente a la función
            recursive_convert "$file"
        elif [ -f "$file" ]; then
            # Si es un archivo, llama a la función de conversión
            convert_to_webp "$file"
        fi
    done
}

# Directorio inicial para comenzar la conversión
initial_directory="./"

# Llama a la función para convertir recursivamente los archivos PNG a WebP
recursive_convert "$initial_directory"
