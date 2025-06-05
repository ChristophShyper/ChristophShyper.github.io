export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  github: {
    name: "GitHub",
    iconName: "github",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  terraform: {
    name: "Terraform",
    iconName: "terraform",
  },
  powershell: {
    name: "PowerShell",
    iconName: "powershell",
  },
  bash: {
    name: "Bash",
    iconName: "bash_dark",
  },
  apple: {
    name: "MacOS",
    iconName: "apple_dark",
  },
  atlassian: {
    name: "Atlassian",
    iconName: "atlassian",
  },
  aws: {
    name: "AWS",
    iconName: "aws_dark",
  },
  docker: {
    name: "Docker",
    iconName: "docker",
  },
  linux: {
    name: "Linux",
    iconName: "linux",
  },
  makefile: {
    name: "Makefile",
    iconName: "makefile",
  },
  groovy: {
    name: "Groovy",
    iconName: "groovy",
  },
  soapui: {
    name: "SoapUI",
    iconName: "soapui",
  },
  jenkins: {
    name: "Jenkins",
    iconName: "jenkins",
  },
  gcp: {
    name: "GCP",
    iconName: "gcp",
  },
  azure: {
    name: "Azure",
    iconName: "azure",
  },
  okta: {
    name: "Okta",
    iconName: "okta",
  },
  devops: {
    name: "DevOps",
    iconName: "devops",
  },
  cicd: {
    name: "CI/CD",
    iconName: "ci-cd",
  },
  opentofu: {
    name: "OpenTofu",
    iconName: "opentofu",
  },
  gh_actions: {
    name: "GitHub Actions",
    iconName: "github-actions",
  },
  iam: {
    name: "Identity and Access Management",
    iconName: "iam",
  },
  remote: {
    name: "Remote",
    iconName: "remote",
  },
  in_person: {
    name: "In person",
    iconName: "presentation",
  },
  medium: {
    name: "Medium",
    iconName: "medium",
  },
};



export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 