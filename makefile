.PHONY: install test build

install:
	npm install

test:
	npm test

build: install test
	@echo "Build local completado con éxito. El entorno está listo."