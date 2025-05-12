
COMPOSE_FILE = docker-compose.yml
PROJECT_NAME = portfolio-app
IMAGE_NAME = portfolio-app

# Run the app with docker and nginx
up:
	@echo "Building the project..."
	@npm install && npm run build
	@echo "Starting up the project with docker compose..."
	docker compose -f $(COMPOSE_FILE) -p $(PROJECT_NAME) up --build -d

# Shut down the container
down:
	docker compose -f $(COMPOSE_FILE) -p $(PROJECT_NAME) down

restart: down up

# Quickly show the real-time logs for the dev environment; 
logs:
	docker compose -f $(COMPOSE_FILE) -p $(PROJECT_NAME) logs -f


# Run the react app only; good for when you just need to develop the frontend.
frontend:
	@echo "Building the frontend..."
	@npm install && npm run dev
