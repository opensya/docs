#!/bin/bash

# Création de la structure de dossiers
mkdir -p docs/getting-started
mkdir -p docs/core-concepts
mkdir -p docs/features/database
mkdir -p docs/configuration
mkdir -p docs/advanced

# Création des fichiers
touch docs/index.md

touch docs/getting-started/introduction.md
touch docs/getting-started/installation.md
touch docs/getting-started/project-structure.md
touch docs/getting-started/first-app.md

touch docs/core-concepts/runtime-lifecycle.md
touch docs/core-concepts/file-based-routing.md
touch docs/core-concepts/compiler.md
touch docs/core-concepts/generated-types.md

touch docs/features/controllers.md
touch docs/features/services.md
touch docs/features/guards.md
touch docs/features/env.md
touch docs/features/i18n.md

touch docs/features/database/index.md
touch docs/features/database/models.md
touch docs/features/database/plugins.md

touch docs/configuration/opensya-config.md
touch docs/configuration/server-config.md

touch docs/advanced/globals.md
touch docs/advanced/runtime-internals.md
touch docs/advanced/production.md

echo "Structure docs créée avec succès 🚀"