# TicketBox SaaS Project Monorepo

Chào mừng đến với dự án TicketBox! Đây là một hệ thống đặt vé SaaS (Software as a Service) được xây dựng với Next.js, NestJS và Tailwind CSS.

## 🚀 Tổng quan

Monorepo này chứa các package và ứng dụng sau:

-   `apps/ticketbox-frontend`: Ứng dụng Next.js 15 cho giao diện người dùng.
-   `apps/ticketbox-backend`: Ứng dụng NestJS cho API và logic backend.
-   `packages/common-types`: Các định nghĩa TypeScript dùng chung.
-   `packages/ui-shared`: Các UI component dùng chung.

## 📋 Mô tả Hệ thống

Hệ thống SaaS Đặt vé Ticketbox là một nền tảng web cho phép người dùng đặt vé tham gia các sự kiện như hòa nhạc, concept show, thể thao, phim, và nhiều loại sự kiện khác. Được xây dựng với NextJS cho frontend và NestJS cho backend, hệ thống này cung cấp trải nghiệm người dùng thân thiện, hiệu suất cao, và các công cụ quản lý mạnh mẽ cho quản trị viên.

### Các thành phần chính

1. **Trang Landing Page**
   - Giới thiệu nền tảng và thu hút người dùng mới
   - Hiển thị sự kiện nổi bật và chương trình khuyến mãi
   - Các nút hành động: "Khám phá sự kiện", "Đăng ký", "Đăng nhập"

2. **Trang chính (Event Listing và Booking)**
   - Danh sách sự kiện với tìm kiếm và lọc
   - Chi tiết sự kiện và đặt vé
   - Tích hợp thanh toán an toàn
   - Xác nhận đặt vé và quản lý vé

3. **Trang Dashboard**
   - Cho người dùng: Xem và quản lý vé đã đặt
   - Cho quản trị viên: Quản lý sự kiện, vé, thống kê và báo cáo

### Tính năng chính

- **Xác thực và ủy quyền**
  - Đăng ký/đăng nhập với email, số điện thoại, hoặc mạng xã hội
  - Phân quyền người dùng và quản trị viên

- **Cập nhật thời gian thực**
  - Cập nhật số lượng vé còn lại
  - Thông báo về thay đổi sự kiện

- **Thông báo**
  - Email/SMS xác nhận đặt vé
  - Nhắc nhở trước sự kiện
  - Thông báo thay đổi

- **Tối ưu hóa**
  - Responsive design cho mọi thiết bị
  - SEO tối ưu
  - Hiệu suất cao với caching và tối ưu hóa

### Cấu trúc kỹ thuật

#### Frontend (Next.js)
- Server-side rendering (SSR) và static site generation (SSG)
- React components tái sử dụng
- State management với React Context/Zustand
- Tailwind CSS cho UI
- Tích hợp API NestJS

#### Backend (NestJS)
- RESTful API với NestJS
- TypeORM cho database operations
- JWT authentication
- Tích hợp cổng thanh toán
- WebSocket cho real-time updates

#### Database
- PostgreSQL
- Redis cho caching
- Tối ưu hóa truy vấn

## 🛠️ Yêu cầu Hệ thống

*   Node.js (v18.x.x trở lên)
*   npm (v9.x.x) / yarn (v1.22.x) / pnpm (v8.x.x)
*   PostgreSQL (v14.x.x trở lên)
*   Redis (v6.x.x trở lên)

## ⚙️ Thiết lập Môi trường Phát triển

1.  **Clone repository:**
    ```bash
    git clone <your-repo-url>
    cd ticketbox-monorepo
    ```

2.  **Cài đặt dependencies:**
    Từ thư mục gốc của monorepo, chạy:
    ```bash
    npm install
    # hoặc
    # yarn install
    # hoặc
    # pnpm install
    ```

## ▶️ Chạy Dự án

### Chạy Frontend (Next.js)
```bash
npm run dev -w apps/ticketbox-frontend
# Hoặc nếu bạn đã định nghĩa script ở root package.json:
# npm run dev:frontend
```
Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

### Chạy Backend (NestJS)
```bash
npm run start:dev -w apps/ticketbox-backend
# Hoặc nếu bạn đã định nghĩa script ở root package.json:
# npm run dev:backend
```
API sẽ chạy trên [http://localhost:3001](http://localhost:3001).

### Chạy tất cả (Nếu dùng Turborepo)
```bash
npm run dev # Giả sử bạn có script "dev": "turbo dev" trong root package.json
```

## 🧪 Chạy Tests
```bash
# Chạy test cho tất cả workspaces
npm test --workspaces
# Hoặc chạy test cho từng workspace
npm test -w apps/ticketbox-frontend
npm test -w apps/ticketbox-backend
```

## 🔒 Bảo mật

- Mã hóa dữ liệu với HTTPS và TLS
- Xử lý thanh toán an toàn qua cổng thanh toán tuân thủ PCI DSS
- Kiểm tra bảo mật định kỳ
- Bảo vệ API với rate limiting và CORS

## 🚀 Triển khai

- Frontend: Vercel hoặc Netlify
- Backend: AWS, Google Cloud, hoặc Azure
- Database: Managed PostgreSQL service
- CI/CD: GitHub Actions

## 🤝 Đóng góp

Chúng tôi rất hoan nghênh mọi đóng góp! Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm chi tiết.

## 📜 Giấy phép

Dự án này được cấp phép theo [MIT License](LICENSE).