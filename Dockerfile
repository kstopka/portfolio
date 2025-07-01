# Używamy oficjalnego obrazu Node.js
FROM node:18.14.1

# Ustawiamy katalog roboczy w kontenerze
WORKDIR /app

# Kopiujemy package.json oraz package-lock.json (jeśli masz)
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy cały kod projektu do kontenera
COPY . .

# Jeśli masz plik .env, kopiujemy go do kontenera
COPY .env .env

# Exponujemy port 8000, na którym działa Gatsby
EXPOSE 8000

# Uruchamiamy Gatsby w trybie deweloperskim z dostępem z zewnątrz
CMD ["npm", "run", "develop", "--", "--host", "0.0.0.0"]
