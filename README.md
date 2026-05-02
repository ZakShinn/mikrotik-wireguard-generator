# MikroTik Tools (Zakshin)

| [Tiếng Việt](#tiếng-việt) | [English](#english) |

---

## Tiếng Việt

### Giới thiệu

**MikroTik Tools** là bộ công cụ web tĩnh (**HTML + Vue 3**, chạy trong trình duyệt) hỗ trợ **RouterOS**:

| Công cụ | Nội dung chính |
|--------|----------------|
| **WireGuard** | Sinh script MikroTik, peer, file `.conf`, QR — logic tham chiếu [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator). |
| **Hairpin NAT** | NAT loopback / hairpin + port forward (script copy-paste). |
| **NextDNS** | **DNS over HTTPS (DoH)** trên RouterOS 7+; tùy chọn **`servers=`** ultralow (**IPv4 + IPv6**), **DHCP `dns-server`**, **NAT DNS redirect** (UDP/TCP 53). |
| **IPTV** | Mẫu VLAN / DHCP VLAN / IGMP proxy (tham khảo nhà mạng Việt Nam). |

Trang chủ (`index.html`) là menu chọn công cụ. Mỗi trang hỗ trợ **Tiếng Việt** và **English**. URL “sạch” (canonical): `/wireguard`, `/hairpin-nat`, `/nextdns`, `/iptv` — cấu hình trong [`vercel.json`](vercel.json).

### Cấu trúc thư mục (chính)

| Đường dẫn | Vai trò |
|-----------|---------|
| [`index.html`](index.html) | Trang chủ, danh sách công cụ |
| [`wireguard.html`](wireguard.html), [`hairpin-nat.html`](hairpin-nat.html), [`nextdns.html`](nextdns.html), [`iptv.html`](iptv.html) | Từng công cụ |
| [`assets/site.css`](assets/site.css) | Giao diện dùng chung (dark theme, responsive, fullscreen shell) |
| [`robots.txt`](robots.txt) | Chính sách crawl + đường dẫn sitemap |
| [`sitemap.xml`](sitemap.xml) | Sitemap các URL canonical |
| [`vercel.json`](vercel.json) | Rewrite URL tĩnh, redirect `.html` → clean URL, HTTP headers |

**Stack UI:** Vue 3 (CDN), **DM Sans**, Font Awesome 6, **`assets/site.css`** (không dùng Bulma).

### Bảo mật

- **Xử lý nhạy cảm trên trình duyệt của bạn:** khóa, script và file tải xuống được tạo **client-side**. Không upload khóa hay cấu hình VPN lên máy chủ ứng dụng để xử lý đám mây.
- **Truy cập web:** tài nguyên tải qua HTTPS (CDN cho Vue / thư viện phụ). Kiểm tra địa chỉ **`https://mikrotik.hainghia.net`** và chứng chỉ trình duyệt.
- **Trách nhiệm:** bạn chịu trách nhiệm bảo vệ thiết bị và mạng; không chia sẻ khóa riêng hay file cấu hình cho người không tin cậy.

### Cách dùng qua website

1. Mở trình duyệt hiện đại (Chrome, Edge, Firefox, Safari, …).
2. Truy cập **[https://mikrotik.hainghia.net](https://mikrotik.hainghia.net)**.
3. Chọn công cụ trên trang chủ và làm theo hướng dẫn từng trang.

Nên bookmark đúng hostname để tránh nhầm trang giả mạo.

### Chạy cục bộ / triển khai

- Mở `index.html` trực tiếp có thể dùng được một phần; một số clipboard / CDN hoạt động tốt hơn khi phục vụ qua HTTP/HTTPS (ví dụ `npx serve .`).
- **Vercel:** đặt repo này làm site tĩnh; [`vercel.json`](vercel.json) xử lý rewrite, redirect và headers (bao gồm cache nhẹ cho `assets/`).

### Ghi nhận & giấy phép

- **Tác giả:** [Nghĩa Zakshin](https://github.com/ZakShinn).
- **WireGuard (MT-WG Gen):** tham chiếu / tối ưu từ [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator).
- **Giấy phép:** **Apache License 2.0** — xem [`LICENSE`](LICENSE).

---

## English

### About

**MikroTik Tools** is a static **RouterOS** toolkit (**HTML + Vue 3**, runs in the browser):

| Tool | What it does |
|------|----------------|
| **WireGuard** | MikroTik scripts, peers, `.conf`, QR — builds on ideas from [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator). |
| **Hairpin NAT** | Hairpin / loopback NAT + WAN port forward (copy-paste scripts). |
| **NextDNS** | **DNS over HTTPS (DoH)** on RouterOS v7+; optional **`servers=`** ultralow (**IPv4 + IPv6**), **DHCP `dns-server`**, **NAT DNS redirect**. |
| **IPTV** | Sample VLAN / DHCP on IPTV VLAN / IGMP proxy (Vietnam ISP reference). |

The home page (`index.html`) lists all tools. Each page supports **Vietnamese** and **English**. Canonical paths: `/wireguard`, `/hairpin-nat`, `/nextdns`, `/iptv` — see [`vercel.json`](vercel.json).

### Repository layout

| Path | Role |
|------|------|
| [`index.html`](index.html) | Landing / tool hub |
| [`wireguard.html`](wireguard.html), [`hairpin-nat.html`](hairpin-nat.html), [`nextdns.html`](nextdns.html), [`iptv.html`](iptv.html) | Individual tools |
| [`assets/site.css`](assets/site.css) | Shared UI (dark theme, responsive, full-viewport shell) |
| [`robots.txt`](robots.txt) | Crawl policy + sitemap URL |
| [`sitemap.xml`](sitemap.xml) | XML sitemap for canonical URLs |
| [`vercel.json`](vercel.json) | Static rewrites, redirects, HTTP headers |

**UI stack:** Vue 3 (CDN), **DM Sans**, Font Awesome 6, **`assets/site.css`** (no Bulma).

### Security

- **Sensitive work stays client-side:** keys, scripts, and downloads are generated in the browser; nothing is uploaded to an app backend for processing.
- **Serving:** assets load over HTTPS (plus third-party CDNs for Vue and helpers). Prefer **`https://mikrotik.hainghia.net`**.
- **Your responsibility:** protect devices and credentials; do not share private keys or configs.

### Hosted usage

1. Use a modern browser.
2. Open **[https://mikrotik.hainghia.net](https://mikrotik.hainghia.net)**.
3. Pick a tool and follow on-page instructions.

Bookmark that URL to avoid typosquatting.

### Run / deploy

- Local file open works for basic browsing; HTTPS/static hosting (`npx serve .`, **Vercel**, Netlify, …) is recommended.
- **Vercel:** [`vercel.json`](vercel.json) defines clean URLs, redirects from legacy `.html` paths, and security/cache headers.

### Credits & license

- **Author:** [Nghĩa Zakshin](https://github.com/ZakShinn).
- **WireGuard generator:** builds on [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator).
- **License:** **Apache License 2.0** — see [`LICENSE`](LICENSE).
