# MikroTik Tools (Zakshin)

| [Tiếng Việt](#tiếng-việt) | [English](#english) |

---

## Tiếng Việt

### MikroTik Tools là gì?
Website chạy ngay trong trình duyệt để **tạo script RouterOS** dạng **copy/paste** vào Terminal MikroTik.

### Có những tính năng gì?
- **WireGuard**: tạo script router + file client `.conf` + QR.
- **Hairpin NAT**: hairpin/loopback NAT + port-forward.
- **NextDNS**: cấu hình DoH (RouterOS 7+), tuỳ chọn DHCP DNS và NAT redirect DNS.
- **IPTV**: mẫu VLAN/DHCP/IGMP proxy (tham khảo nhà mạng Việt Nam).
- **Firewall**: khung firewall/hardening cơ bản (tham khảo).
- **Cloudflare DDNS**: cập nhật record A/AAAA qua Cloudflare API + scheduler.
- **Routing (Policy Routing)**: định tuyến theo nguồn/subnet (v7 routing rule / v6 mangle).
- **Backup + Telegram**: backup/export theo lịch + **gửi thông báo/log qua Telegram** + tự dọn file cũ.

### Cách sử dụng (nhanh)
1. Mở `https://mikrotik.hainghia.net`.
2. Chọn công cụ.
3. Điền form → **Copy script** → dán vào Terminal MikroTik.

### Danh sách URL (clean)
- `/wireguard`
- `/hairpin-nat`
- `/nextdns`
- `/iptv`
- `/firewall`
- `/cloudflare-ddns`
- `/startup`
- `/social-block`
- `/routing`
- `/telegram-backup`

### Lưu ý bảo mật
- Tất cả dữ liệu/script được tạo **trên trình duyệt của bạn** (client-side).
- **Không chia sẻ** private key/token (WireGuard/Cloudflare/Telegram…).
- Khi dán script vào router, khuyến nghị bật **Safe Mode** để tránh tự khoá mình.

### Ủng hộ (Donate)
Trang chủ có mục **Ủng hộ tác giả** trong [`index.html`](index.html): chuyển khoản MB Bank (STK `0968884946`), PayPal [paypal.me/Zakshin](https://paypal.me/Zakshin), hoặc liên hệ qua [Facebook tác giả](https://www.facebook.com/profile.php?id=100006985387032).

<img src="https://img.vietqr.io/image/MB-0968884946-compact.png?addTag=ZakshinTools" alt="VietQR MB Bank — 0968884946" width="220">

<p>
  <a href="https://paypal.me/Zakshin" title="paypal.me/Zakshin"><img src="Paypal.png" alt="PayPal — paypal.me/Zakshin" width="220"></a>
  &nbsp;&nbsp;
  <a href="https://www.facebook.com/profile.php?id=100006985387032" title="Facebook Zakshin"><img src="Logo.png" alt="Zakshin — Facebook" width="220"></a>
</p>

### Chạy cục bộ / triển khai
- Có thể mở `index.html` trực tiếp, nhưng khuyến nghị serve qua HTTP để clipboard/CDN ổn định:

```bash
npx serve .
```

- Deploy tĩnh (Vercel/Netlify/…): `vercel.json` đã có rewrite/redirect cho clean URL.

### Ghi nhận & giấy phép
- **Tác giả**: [Nghĩa Zakshin](https://github.com/ZakShinn)
- **WireGuard (MT-WG Gen)**: tham chiếu / tối ưu từ [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator)
- **Giấy phép**: **Apache License 2.0** — xem [`LICENSE`](LICENSE)

---

## English

### What is MikroTik Tools?
A static website that runs in your browser to **generate RouterOS scripts** for **copy/paste** into MikroTik Terminal.

### Features
- **WireGuard**: router scripts + client `.conf` + QR.
- **Hairpin NAT**: loopback/hairpin NAT + port-forward.
- **NextDNS**: DoH on RouterOS 7+, optional DHCP DNS + DNS redirect.
- **IPTV**: sample VLAN/DHCP/IGMP proxy templates.
- **Firewall**: starter firewall/hardening reference.
- **Cloudflare DDNS**: update A/AAAA via Cloudflare API + scheduler.
- **Policy Routing**: route by source/subnet (v7 rules / v6 mangle).
- **Backup + Telegram**: scheduled backup/export + **Telegram notify/log** + auto cleanup.

### Quick usage
1. Open `https://mikrotik.hainghia.net`.
2. Pick a tool.
3. Fill the form → copy the script → paste into MikroTik Terminal.

### Support / donate
The home page has a **Support the author** section in [`index.html`](index.html): MB Bank transfer (`0968884946`), PayPal [paypal.me/Zakshin](https://paypal.me/Zakshin), or the [author’s Facebook page](https://www.facebook.com/profile.php?id=100006985387032).

<img src="https://img.vietqr.io/image/MB-0968884946-compact.png?addTag=ZakshinTools" alt="VietQR MB Bank — 0968884946" width="220">

<p>
  <a href="https://paypal.me/Zakshin" title="paypal.me/Zakshin"><img src="Paypal.png" alt="PayPal — paypal.me/Zakshin" width="220"></a>
  &nbsp;&nbsp;
  <a href="https://www.facebook.com/profile.php?id=100006985387032" title="Zakshin on Facebook"><img src="Logo.png" alt="Zakshin — Facebook" width="220"></a>
</p>

### Credits & license
- **Author**: [Nghĩa Zakshin](https://github.com/ZakShinn)
- **WireGuard generator**: builds on [markeclaudio/mikrotik-wireguard-config-generator](https://github.com/markeclaudio/mikrotik-wireguard-config-generator)
- **License**: **Apache License 2.0** — see [`LICENSE`](LICENSE)
