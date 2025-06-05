export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
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
  github: {
    name: "GitHub",
    iconName: "github",
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
  article: {
    name: "Article",
    iconName: "article",
  },
  network: {
    name: "Network",
    iconName: "network",
  },
};



export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 