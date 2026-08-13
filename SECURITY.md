# Security Policy

## Supported Versions

This project ships as a rolling `main` branch rather than versioned releases. Security fixes are applied to `main` only — please always consume the latest published registry output.

## Reporting a Vulnerability

If you discover a security vulnerability in this registry (for example, an XSS vector in a component, an unsafe dependency, or a way that installed code could execute untrusted input), please **do not open a public issue**.

Instead, report it privately using one of the following:

- [GitHub private vulnerability reporting](https://github.com/Mohid-Anwar/dga-registry/security/advisories/new) (preferred)
- Open a regular issue asking for a private contact channel if the above isn't available to you

Please include:

- A description of the vulnerability and its potential impact
- Steps to reproduce, or a minimal proof-of-concept
- The affected component(s)/file path(s)

You should expect an initial response within a few days. Once a fix is available, we'll coordinate on disclosure timing before any public write-up.

## Scope

In scope:

- Component source under `registry/dga/` (what consumers actually install via `shadcn add`)
- The registry build pipeline (`registry.json`, `public/r/*.json` generation)

Out of scope:

- The documentation/demo site's own hosting/infrastructure (`app/`, `components/`) unless the issue is reachable through installed registry code
- Vulnerabilities in third-party dependencies — please report those upstream, though we're happy to hear about them too
