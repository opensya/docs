---
title: OpenSya
description: The open-source recruitment infrastructure for modern companies. Modular, scalable, and fully owned by you.
---

::u-page-hero
---
orientation: vertical
---

#title
The open-source recruitment infrastructure for modern companies

#description
OpenSya helps you build modular, scalable and fully owned recruitment platforms using a convention-driven fullstack runtime powered by NestJS and Nuxt.

#links
  :::u-button
  ---
  to: /introduction
  size: xl
  icon: i-lucide-arrow-right
  trailing: true
  ---
  Get started
  :::

  :::u-button
  ---
  to: /core/architecture
  size: xl
  color: neutral
  variant: subtle
  icon: i-lucide-folder-open
  ---
  Explore architecture
  :::

#default
  :::HeroTerminal{class="max-w-180 mx-auto w-[90%]"}
  ---
  lines:
    - segments:
        - text: '$ '
          style: prompt

        - text: 'npx opensya'
          style: cmd

        - text: ' create'
          style: flag

        - text: ' my-company-careers'
          style: arg

    - segments:
        - text: '◆ '
          style: success

        - text: 'Welcome to Opensya!'
          style: cmd

    - segments:
        - text: '? '
          style: prompt

        - text: 'Where would you like to create your project?'
          style: dim

        - text: ' ./my-company-careers'
          style: arg

    - segments:
        - text: '? '
          style: prompt

        - text: 'Which package manager would you like to use?'
          style: dim

        - text: ' pnpm'
          style: cmd

    - segments:
        - text: '? '
          style: prompt

        - text: 'Initialize git repository?'
          style: dim

        - text: ' yes'
          style: success

    - segments:
        - text: '→ '
          style: dim

        - text: 'Creating project in '
          style: dim

        - text: 'my-company-careers'
          style: cmd

    - segments:
        - text: '✓ '
          style: success

        - text: 'Dependencies installed'
          style: dim

    - segments:
        - text: '✓ '
          style: success

        - text: 'Git repository initialized'
          style: dim

    - segments:
        - text: '✨ '
          style: success

        - text: 'Opensya project has been created with the '
          style: dim

        - text: 'default'
          style: cmd

        - text: ' template.'
          style: dim

    - segments:
        - text: ' '
          style: dim

    - segments:
        - text: '👉 Next steps'
          style: cmd

    - segments:
        - text: ' › '
          style: prompt

        - text: 'cd my-company-careers'
          style: cmd

    - segments:
        - text: ' › '
          style: prompt

        - text: 'pnpm run dev'
          style: cmd
  ---
  :::
::

::u-page-section
---
title: Build recruitment platforms without giving up ownership
description: OpenSya gives modern teams the foundation to build, customize and self-host their recruitment infrastructure.
---

::u-page-grid
  :::u-page-card
  ---
  title: Modular by design
  icon: i-lucide-boxes
  ---
  Compose your platform around independent runtime units, backend services and frontend integrations.
  :::

  :::u-page-card
  ---
  title: Convention-driven runtime
  icon: i-lucide-folder-tree
  ---
  Structure your application with clear filesystem conventions and let OpenSya orchestrate the runtime.
  :::

  :::u-page-card
  ---
  title: Fully owned by you
  icon: i-lucide-shield-check
  ---
  Keep control over your data, infrastructure and deployment strategy with a self-hostable architecture.
  :::
::
::

::u-page-section
---
title: Fullstack runtime architecture
description: OpenSya Core powers both backend and frontend applications through a shared architecture philosophy.
---

::u-page-grid
  :::u-page-card
  ---
  title: Nest runtime
  icon: i-lucide-server
  to: /nest/introduction
  ---
  The backend runtime is generated and orchestrated automatically from your `server/` directory.
  :::

  :::u-page-card
  ---
  title: Nuxt runtime
  icon: i-lucide-monitor-smartphone
  to: /nuxt/introduction
  ---
  The frontend runtime is delegated to Nuxt, with OpenSya adding shared conventions and integrations.
  :::

  :::u-page-card
  ---
  title: Database layer
  icon: i-lucide-database
  to: /nest/database
  ---
  Define models and plugins from the filesystem and let the runtime register them automatically.
  :::
::
::

::u-page-section
---
title: Start with the core concepts
description: Learn how OpenSya discovers files, generates runtimes and keeps applications modular.
---

::u-page-grid
  :::u-page-card
  ---
  title: Architecture
  icon: i-lucide-folder-open
  to: /core/architecture
  ---
  Understand how OpenSya organizes fullstack applications around `server/`, `client/` and shared configuration.
  :::

  :::u-page-card
  ---
  title: Runtime
  icon: i-lucide-cpu
  to: /core/runtime
  ---
  Learn how OpenSya discovers, generates and executes the backend runtime automatically.
  :::

  :::u-page-card
  ---
  title: Modules
  icon: i-lucide-boxes
  to: /core/modules
  ---
  Explore how modules will extend OpenSya as runtime-aware infrastructure units.
  :::
::
::
