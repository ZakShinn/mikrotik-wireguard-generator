# MikroTik Tools (Zakshin)

| [Tiếng Việt](#tiếng-việt) | [English](#english) |

---

## Tiếng Việt

### Giới thiệu

**MikroTik Tools** là bộ công cụ web hỗ trợ **RouterOS**: hiện gồm **WireGuard (MT-WG Gen)** — tạo script, peer, file `.conf` và mã QR; và **Hairpin NAT** — sinh script NAT loopback trong LAN kèm port forward WAN. Trang chủ là menu chọn công cụ; giao diện có thể dùng tiếng Việt hoặc tiếng Anh.

### Bảo mật

- **Xử lý nhạy cảm trên trình duyệt của bạn:** sinh khóa, nội dung script và file tải xuống được tạo **trong máy** (client-side). Công cụ **không** gửi khóa hay cấu hình VPN của bạn lên máy chủ ứng dụng để “xử lý đám mây”.
- **Truy cập web:** khi mở trang, trình duyệt chỉ tải các tệp HTML/JS/CSS và thư viện phụ trợ (Vue, Bulma, v.v.) qua HTTPS như mọi website tĩnh. Hãy luôn kiểm tra thanh địa chỉ là **`https://mikrotik.hainghia.net`** và dấu ổ khóa trình duyệt.
- **Trách nhiệm sử dụng:** bạn chịu trách nhiệm bảo vệ thiết bị, trình duyệt và mạng; không chia sẻ khóa riêng hay file cấu hình cho người không tin cậy.

### Cách dùng qua website

1. Mở trình duyệt (Chrome, Edge, Firefox, Safari, …).
2. Truy cập: **[https://mikrotik.hainghia.net](https://mikrotik.hainghia.net)**
3. Từ trang chủ, chọn **WireGuard** hoặc **Hairpin NAT** và làm theo hướng dẫn trên từng trang.

Nên lưu bookmark đúng địa chỉ trên để tránh nhầm sang trang giả mạo.

### Ghi nhận & giấy phép

- **Tác giả / phát triển:** [Nghĩa Zakshin](https://github.com/ZakShinn)
- **WireGuard (MT-WG Gen):** logic dựa trên / tối ưu từ mã nguồn mở [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator)
- **Giấy phép:** dự án sử dụng **Apache License 2.0** — chi tiết trong tệp [`LICENSE`](LICENSE).

---

## English

### About the tools

**MikroTik Tools** is a small **RouterOS** web toolkit: **WireGuard (MT-WG Gen)** builds scripts, peers, `.conf` files, and QR codes; **Hairpin NAT** generates hairpin NAT plus WAN port-forward scripts. The home page is a simple menu; the UI supports Vietnamese and English.

### Security

- **Sensitive work stays in your browser:** keys, scripts, and downloads are generated **client-side**. The apps **do not** upload your VPN keys or configs to an application backend for processing.
- **Web access:** the browser loads static HTML/JS/CSS and common libraries (Vue, Bulma, etc.) over HTTPS like any static site. Always confirm the address bar shows **`https://mikrotik.hainghia.net`** and the browser lock icon.
- **Your responsibility:** protect your device, browser, and network; do not share private keys or config files with untrusted parties.

### Using the hosted site

1. Open a modern browser.
2. Go to **[https://mikrotik.hainghia.net](https://mikrotik.hainghia.net)**
3. From the home page, open **WireGuard** or **Hairpin NAT** and follow the on-page steps.

Bookmark that URL so you always return to the official site.

### Credits & license

- **Author / maintainer:** [Nghĩa Zakshin](https://github.com/ZakShinn)
- **WireGuard (MT-WG Gen):** core logic builds on the open-source work [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator)
- **License:** this project is licensed under the **Apache License 2.0** — see the [`LICENSE`](LICENSE) file for details.
