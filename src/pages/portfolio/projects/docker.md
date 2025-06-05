---
layout:  /src/layouts/ProjectLayout.astro
title: 'docker-terragrunt'
pubDate: 2019-08-05
description: 'Dockerized IaC framework for Terraform, OpenTofu and Terragrunt. Since 2019.'
languages: ["docker", "terraform", "opentofu", "aws", "gcp", "azure", "python"]
image:
  url: "/images/projects/docker-terragrunt.png"
  alt: "docker-terragrunt"
--- 

## Introduction

Dockerized IaC framework for Terraform, OpenTofu and Terragrunt

This project is a Dockerized IaC framework for Terraform, OpenTofu and Terragrunt. It provides a set of tools and scripts to help you manage your infrastructure as code in a containerized environment.

Docker image with Terraform or Terragrunt, together with Terragrunt, Go, Python, Make, Docker, Git, and all needed components to easily manage cloud  infrastructure for CI/CD environments as a runner image.

Including cloud CLIs and SDKs for **Amazon Web Services, Microsoft Azure, Google Cloud Platform**.

**Best used as runner image for CI/CD in automation, as well as a consistent local run environment.**

Please note focus of those images is to maintain availability of current versions of **Terraform, OpenTofu and Terragrunt**, not CLIs or other dependencies.
Hence, images are updated when new version of Terraform, OpenTofu or Terragrunt is released. Furthermore, versioning labels of images contain versions of said software to emphasize it.


## Source code and Docker images

**Source code** at [devops-infra/docker-terragrunt](https://github.com/devops-infra/docker-terragrunt).

**Docker Hub** images at [docker.io/devopsinfra/docker-terragrunt](https://hub.docker.com/repository/docker/devopsinfra/docker-terragrunt)

**GitHub Packages** images at [ghcr.io/devops-infra/docker-terragrunt/docker-terragrunt](https://github.com/devops-infra/docker-terragrunt/pkgs/container/docker-terragrunt)
