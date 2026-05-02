# MikroTik Tools (Zakshin)

| [Tiếng Việt](#tiếng-việt) | [English](#english) |

---

## Tiếng Việt

### Giới thiệu

**MikroTik Tools** là bộ công cụ web (HTML + Vue, chạy trong trình duyệt) hỗ trợ **RouterOS**:

| Công cụ | Nội dung chính |
|--------|----------------|
| **WireGuard** | Sinh script MikroTik, peer, file `.conf`, QR — logic dựa trên [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator). |
| **Hairpin NAT** | NAT loopback / hairpin + port forward (script copy-paste). |
| **NextDNS** | **DNS over HTTPS (DoH)** trên RouterOS 7+; tùy chọn **`servers=`** DNS thuần ultralow (**IPv4 + IPv6**), **DHCP `dns-server`**, **NAT DNS redirect** (ép UDP/TCP 53 về router). |
| **IPTV** | Mẫu VLAN / bridge / IGMP. |

Trang chủ (`index.html`) là menu chọn công cụ. Mỗi trang hỗ trợ **tiếng Việt** và **tiếng Anh**. URL thân thiện: `/wireguard`, `/hairpin-nat`, `/nextdns`, `/iptv` (cấu hình trên Vercel, xem `vercel.json`).

### Bảo mật

- **Xử lý nhạy cảm trên trình duyệt của bạn:** sinh khóa, nội dung script và file tải xuống được tạo **trong máy** (client-side). Công cụ **không** gửi khóa hay cấu hình VPN lên máy chủ ứng dụng để xử lý đám mây.
- **Truy cập web:** trình duyệt tải HTML/JS/CSS và thư viện (Vue, Bulma, …) qua HTTPS. Hãy kiểm tra thanh địa chỉ là **`https://mikrotik.hainghia.net`** và dấu ổ khóa.
- **Trách nhiệm sử dụng:** bạn chịu trách nhiệm bảo vệ thiết bị, trình duyệt và mạng; không chia sẻ khóa riêng hay file cấu hình cho người không tin cậy.

### Cách dùng qua website

1. Mở trình duyệt (Chrome, Edge, Firefox, Safari, …).
2. Truy cập: **[https://mikrotik.hainghia.net](https://mikrotik.hainghia.net)**
3. Từ trang chủ, chọn công cụ và làm theo hướng dẫn trên từng trang.

Nên lưu bookmark đúng địa chỉ trên để tránh nhầm sang trang giả mạo.

### Chạy / triển khai tĩnh

- Mở trực tiếp `index.html` bằng trình duyệt (một số tính năng cần phục vụ qua HTTP/HTTPS).
- **Vercel:** repository này có `vercel.json` (rewrites, redirects, security headers) cho site tĩnh.

### Ghi nhận & giấy phép

- **Tác giả / phát triển:** [Nghĩa Zakshin](https://github.com/ZakShinn)
- **WireGuard (MT-WG Gen):** logic dựa trên / tối ưu từ mã nguồn mở [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator)
- **Giấy phép:** dự án sử dụng **Apache License 2.0** — chi tiết trong tệp [`LICENSE`](LICENSE).

---

## English

### About the tools

**MikroTik Tools** is a static **RouterOS** web toolkit (HTML + Vue, runs in the browser):

| Tool | What it does |
|------|----------------|
| **WireGuard** | MikroTik scripts, peers, `.conf` files, QR — based on [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator). |
| **Hairpin NAT** | Hairpin / loopback NAT + port forward (copy-paste scripts). |
| **NextDNS** | **DNS over HTTPS (DoH)** on RouterOS v7+; optional **`servers=`** ultralow plain DNS (**IPv4 + IPv6**), **DHCP `dns-server`**, **NAT DNS redirect**. |
| **IPTV** | Sample VLAN / bridge / IGMP notes. |

The home page (`index.html`) is a tool menu. Each page supports **Vietnamese** and **English**. Clean URLs: `/wireguard`, `/hairpin-nat`, `/nextdns`, `/iptv` (see `vercel.json` for Vercel).

### Security

- **Sensitive work stays in your browser:** keys, scripts, and downloads are generated **client-side**. The apps **do not** upload your VPN keys or configs to a backend.
- **Web access:** the browser loads static assets over HTTPS. Confirm the address bar shows **`https://mikrotik.hainghia.net`** and the browser lock icon.
- **Your responsibility:** protect your device, browser, and network; do not share private keys or config files with untrusted parties.

### Using the hosted site

1. Open a modern browser.
2. Go to **[https://mikrotik.hainghia.net](https://mikrotik.hainghia.net)**
3. Pick a tool from the home page and follow the on-page steps.

Bookmark that URL so you always return to the official site.

### Running / deploying

- You can open `index.html` locally (some features work best over HTTP/HTTPS).
- **Vercel:** this repo includes `vercel.json` (rewrites, redirects, security headers) for static hosting.

### Credits & license

- **Author / maintainer:** [Nghĩa Zakshin](https://github.com/ZakShinn)
- **WireGuard (MT-WG Gen):** core logic builds on the open-source work [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator)
- **License:** this project is licensed under the **Apache License 2.0** — see the [`LICENSE`](LICENSE) file for details.
