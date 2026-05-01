# 🚀 MikroTik WireGuard Config Generator

[Tiếng Việt](#tiếng-việt) | [English](#english)

---

## Tiếng Việt

**MikroTik WireGuard Generator** là công cụ nền tảng web mạnh mẽ giúp đơn giản hóa việc thiết lập VPN WireGuard trên MikroTik RouterOS (phiên bản 7 trở lên). Dự án này được phát triển dựa trên nền tảng logic của mã nguồn mở từ `markeclaudio`, tối ưu hóa giao diện và trải nghiệm người dùng.

### ✨ Tính năng nổi bật
*   **Tự động hóa hoàn toàn:** Tạo cặp khóa Private/Public Key và Preshared Key (PSK) chỉ với một cú click.
*   **Mã QR Tiện lợi:** Tự động tạo QR code để quét và kết nối nhanh trên điện thoại (iOS/Android).
*   **Xuất dữ liệu thông minh:** Tải về hàng loạt cấu hình dưới dạng tệp `.conf` hoặc nén thành tệp `.zip` tiện lợi.
*   **Tối ưu cho RouterOS:** Cung cấp Script chuẩn để dán (Paste) trực tiếp vào Terminal MikroTik, bao gồm cả thiết lập Firewall và IP Address.
*   **Bảo mật tuyệt đối:** Mọi quá trình tính toán diễn ra ngay trên trình duyệt của bạn (Client-side), không có bất kỳ dữ liệu nào được gửi về máy chủ.

### 🛠 Hướng dẫn sử dụng
1. Nhập thông tin Server (IP WAN hoặc DDNS, Cổng UDP).
2. Tùy chỉnh dải IP VPN và số lượng Client (máy khách) cần tạo.
3. Nhấn **"TẠO CẤU HÌNH"**.
4. Sao chép đoạn script tại ô **"MikroTik RouterOS Script"** và dán vào Terminal của Router MikroTik.
5. Quét mã QR hoặc tải tệp `.conf` để thiết lập cho thiết bị khách.

---

## English

**MikroTik WireGuard Generator** is a robust web-based utility designed to simplify WireGuard VPN deployment on MikroTik RouterOS (v7+). This project is built upon the core logic from `markeclaudio`, with enhanced UI/UX and additional features for network administrators.

### ✨ Key Features
*   **Full Automation:** Generates Private/Public Key pairs and Preshared Keys (PSK) instantly.
*   **Instant QR Codes:** Automated QR code generation for seamless mobile setup (iOS/Android).
*   **Smart Export:** Bulk download client configurations as `.conf` files or a single `.zip` archive.
*   **RouterOS Optimized:** Provides ready-to-paste scripts for the MikroTik Terminal, including Firewall and IP configurations.
*   **Maximum Security:** All processing occurs locally in the browser (Client-side). Your keys and configurations are never sent to any server.

### 🛠 How to Use
1. Enter Server details (Public WAN IP or DDNS, UDP Port).
2. Customize the VPN Subnet and the number of clients.
3. Click **"GENERATE CONFIGS"**.
4. Copy the script from the **"MikroTik RouterOS Script"** box and paste it into your MikroTik Terminal.
5. Use the generated QR codes or download `.conf` files to configure your clients.

---

## 📜 Credits & License

*   **Lead Developer:** [Nghĩa Zakshin](https://github.com/your-github-username)
*   **Core Engine:** Based on the excellent work by [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator).
*   **License:** This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for details.

---

### 🏷️ Tags
`mikrotik` `wireguard` `routeros` `vpn-generator` `networking-tools` `qrcode` `vuejs` `routeros-v7` `zakshin`
