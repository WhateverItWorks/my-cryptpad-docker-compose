# my-cryptpad-docker-compose
CryptPad is a collaboration suite, encrypted and open-source.

#### Environment variables  

| Variables | Description | Required | Default |
| --- | --- | --- | --- |
| `CPAD_MAIN_DOMAIN` | CryptPad main domain FQDN | Yes | None |
| `CPAD_SANDBOX_DOMAIN` | CryptPad sandbox subdomain FQDN | Yes | None |
| `CPAD_API_DOMAIN` | CryptPad API subdomain FQDN| No | `$CPAD_MAIN_DOMAIN` |
| `CPAD_FILES_DOMAIN` | CryptPad files subdomain FQDN | No | `$CPAD_MAIN_DOMAIN` |
| `CPAD_TRUSTED_PROXY` | Trusted proxy address or CIDR | No | None |
| `CPAD_REALIP_HEADER`| Header to get client IP from (`X-Real-IP` or `X-Forwarded-For`) | No | `X-Real-IP` |
| `CPAD_REALIP_RECURSIVE`| Instruct Nginx to perform a recursive search to find client's real IP (`on`/`off`) (see [ngx_http_realip_module](https://nginx.org/en/docs/http/ngx_http_realip_module.html)) | No | `off` |
| `CPAD_TLS_CERT` | Path to TLS certificate file | No | None |
| `CPAD_TLS_KEY` | Path to TLS private key file | No | None |
| `CPAD_TLS_DHPARAM` | Path to Diffie-Hellman parameters file | No | `/etc/nginx/dhparam.pem` |
| `CPAD_HTTP2_DISABLE` | Disable HTTP2 | No | `false` |

