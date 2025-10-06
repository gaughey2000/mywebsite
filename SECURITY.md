Security Policy

- Never commit secrets (API keys, SMTP creds, tokens) to the repo. Use .env files that are ignored by git.
- Rotate any credentials that have ever been committed, even if removed later.
- Limit access to secrets and use least privilege.
- Review logs and email provider dashboards for suspicious activity after any secret exposure.
- For vulnerability disclosures, please open a security advisory on GitHub or email the maintainer directly.
