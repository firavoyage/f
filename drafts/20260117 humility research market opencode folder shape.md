# Project architecture overview discussion

**Session ID:** ses_433c262dfffet2KYpykCdxSNHh
**Created:** 1/17/2026, 9:55:48 PM
**Updated:** 1/17/2026, 9:57:15 PM

---

## User

tell me about the project architecture

---

## Assistant (Build · big-pickle · 80.6s)



```
Tool: task

**Input:**
```json
{
  "subagent_type": "explore",
  "description": "Explore project architecture",
  "prompt": "I need to understand the architecture and structure of this project. Please:\n\n1. First, examine the root directory structure and key configuration files (package.json, tsconfig.json, etc.) to understand the overall project type and setup\n2. Look for any README or documentation files that explain the project structure\n3. Examine the packages/ directory structure if it exists to understand the monorepo layout\n4. Identify the main entry points and key directories\n5. Look for any architectural documentation or diagrams\n6. Summarize the project architecture, including:\n   - Project type and purpose\n   - Main technologies and frameworks used\n   - Directory structure and organization\n   - Key components and their responsibilities\n   - Build/deployment setup\n\nProvide a comprehensive overview of how this project is structured and organized."
}
```
**Output:**
```

Based on my comprehensive examination of the OpenCode project, I can now provide you with a detailed overview of its architecture and structure:

## Project Overview

**OpenCode** is an open-source AI-powered development tool that serves as an alternative to Claude Code. It's built as a client/server architecture focused on terminal-based interactions with support for multiple AI providers.

## Project Type and Purpose

- **Type**: Monorepo with AI coding agent
- **Purpose**: AI-powered development tool with TUI (Terminal User Interface) focus
- **Architecture**: Client/server model allowing remote control and multiple frontends
- **License**: MIT (100% open source)

## Main Technologies and Frameworks

### Core Technologies
- **Runtime**: Bun 1.3+ (package manager and JavaScript runtime)
- **Language**: TypeScript with strict configuration
- **Build System**: Turbo for monorepo orchestration
- **UI Framework**: SolidJS for reactive components
- **TUI Framework**: OpenTUI for terminal interface
- **Desktop**: Tauri for native desktop applications

### Key Libraries
- **AI SDK**: Vercel AI SDK with multi-provider support
- **Web Framework**: Hono for API server
- **LSP Support**: Built-in Language Server Protocol support
- **File Watching**: Chokidar and Parcel watcher
- **Terminal**: bun-pty for terminal emulation

## Directory Structure and Organization

### Root Configuration
- `package.json` - Monorepo workspace configuration with Bun
- `turbo.json` - Build orchestration
- `tsconfig.json` - TypeScript configuration
- `specs/` - Feature specifications and performance roadmaps

### Core Packages (`packages/`)

1. **`packages/opencode/`** - Core CLI and server
   - Main entry point: `src/index.ts`
   - CLI commands in `src/cli/cmd/`
   - TUI implementation in `src/cli/cmd/tui/`
   - LSP client/server implementation
   - AI provider integrations
   - Plugin system

2. **`packages/app/`** - Shared web UI components
   - SolidJS components for web interfaces
   - Reusable UI elements
   - Vite-based development

3. **`packages/desktop/`** - Native desktop application
   - Tauri-based desktop app
   - Wraps the web UI with native shell
   - Cross-platform support (macOS, Windows, Linux)

4. **`packages/web/`** - Documentation and marketing website
   - Astro-based static site
   - Cloudflare Workers deployment

5. **`packages/console/`** - Web console/management interface
   - Multiple subpackages: `core`, `app`, `mail`, `resource`, `function`
   - User management and billing (Stripe integration)
   - AWS integration

6. **`packages/sdk/`** - JavaScript/TypeScript SDK
   - Generated from OpenAPI specs
   - Client and server components

7. **`packages/ui/`** - Shared UI component library
   - Reusable components across all packages
   - Tailwind CSS styling
   - Theme system

8. **`packages/plugin/`** - Plugin system
   - Extensibility framework
   - Integration points

### Supporting Infrastructure

- **`nix/`** - NixOS/Nix packaging support
- **`script/`** - Build and deployment scripts
- **`extensions/`** - Editor extensions (Zed)
- **`patches/`** - Dependency patches

## Key Components and Their Responsibilities

### 1. Core Server (`packages/opencode`)
- **CLI Interface**: Command-line interface with comprehensive commands
- **TUI Engine**: Terminal-based user interface using OpenTUI
- **AI Integration**: Multi-provider AI model support (OpenAI, Anthropic, local models, etc.)
- **LSP Server**: Language Server Protocol implementation for code intelligence
- **File System**: Project management and file operations
- **Session Management**: Multi-session support with persistence

### 2. Web Interface (`packages/app`)
- **UI Components**: Shared React/SolidJS components
- **State Management**: Reactive state management
- **Styling**: Tailwind CSS with custom themes
- **Integration**: WebSocket connection to core server

### 3. Desktop App (`packages/desktop`)
- **Native Shell**: Tauri-based native application
- **Cross-Platform**: Windows, macOS, Linux support
- **System Integration**: File dialogs, notifications, system tray

### 4. Console (`packages/console`)
- **User Management**: Authentication and authorization
- **Billing**: Stripe integration for subscriptions
- **Analytics**: Usage tracking and metrics
- **API Management**: Backend API services

## Build/Deployment Setup

### Development Workflow
```bash
# Install dependencies
bun install

# Run main development server
bun dev

# Run web UI only
bun run --cwd packages/app dev

# Run desktop app
bun run --cwd packages/desktop tauri dev
```

### Build Process
- **TypeScript**: Strict type checking across all packages
- **Turbo**: Parallel build orchestration
- **Vite**: Fast bundling for web components
- **Tauri**: Native app compilation

### Deployment Targets
- **CLI**: npm, Homebrew, Scoop, package managers
- **Desktop**: Native installers (.dmg, .exe, .deb, .rpm)
- **Web**: Cloudflare Workers (console), Static hosting (documentation)
- **SDK**: npm package distribution

## Architectural Highlights

1. **Provider Agnostic**: Supports multiple AI providers (Claude, OpenAI, local models, etc.)
2. **Client/Server Model**: Core runs as server, multiple client types can connect
3. **Plugin Architecture**: Extensible through plugin system
4. **Multi-Platform**: Native support across all major operating systems
5. **LSP Integration**: Built-in support for language server protocol
6. **Session Persistence**: Ability to save and restore coding sessions
7. **Agent System**: Multiple agent types (build, plan, general) for different use cases

This architecture enables OpenCode to be a flexible, extensible AI coding assistant that can work in various environments while maintaining a consistent experience across different interfaces.

<task_metadata>
session_id: ses_433c24837ffelmSvXF5PKmDZs0
</task_metadata>
```
```

---

## Assistant (Build · big-pickle · 6.4s)


This is an open-source AI-powered development tool built as a monorepo. Here's the architecture:

**Core Structure:**
- **Client/Server Model**: Core server (`packages/opencode`) with multiple client interfaces
- **Technologies**: TypeScript, Bun runtime, SolidJS, Tauri for desktop
- **Monorepo**: Managed with Turbo, containing 8+ specialized packages

**Key Packages:**
- `packages/opencode/` - Core CLI server with TUI, AI integrations, and LSP support
- `packages/app/` - Shared web UI components using SolidJS
- `packages/desktop/` - Native desktop app via Tauri
- `packages/console/` - Management interface with billing and analytics
- `packages/sdk/` - JavaScript/TypeScript SDK
- `packages/web/` - Documentation site

**Architecture Highlights:**
- Multi-provider AI support (OpenAI, Claude, local models)
- Terminal-first design with web/desktop clients
- Plugin system for extensibility
- Built-in Language Server Protocol support
- Session persistence and multi-session management

---

