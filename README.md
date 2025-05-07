    # TicketBox SaaS Project Monorepo

    Chào mừng đến với dự án TicketBox! Đây là một hệ thống đặt vé SaaS (Software as a Service) được xây dựng với Next.js, NestJS và Tailwind CSS.

    ## 🚀 Tổng quan

    Monorepo này chứa các package và ứng dụng sau:

    -   `apps/ticketbox-frontend`: Ứng dụng Next.js 15 cho giao diện người dùng.
    -   `apps/ticketbox-backend`: Ứng dụng NestJS cho API và logic backend.
    -   `packages/common-types`: (Nếu có) Các định nghĩa TypeScript dùng chung.
    -   `packages/ui-shared`: (Nếu có) Các UI component dùng chung.

    ## 🛠️ Yêu cầu Hệ thống

    *   Node.js (phiên bản vXX.X.X trở lên - ghi rõ phiên bản bạn dùng)
    *   npm (vX.X.X) / yarn (vX.X.X) / pnpm (vX.X.X)

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
        (Nếu bạn sử dụng Turborepo, bạn có thể cần cài đặt nó toàn cục hoặc như một dev dependency ở root `package.json`).

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
    API sẽ chạy trên [http://localhost:PORT](http://localhost:PORT) (PORT thường là 3001 hoặc được cấu hình trong backend).

    ### Chạy tất cả (Nếu dùng Turborepo)
    ```bash
    npm run dev # Giả sử bạn có script "dev": "turbo dev" trong root package.json
    ```

    ## 🧪 Chạy Tests
    ```bash
    # Ví dụ
    # npm test --workspaces  # Chạy test cho tất cả workspaces
    # npm test -w apps/ticketbox-frontend
    ```

    ## 🤝 Đóng góp
    (Thông tin về cách đóng góp nếu có)

    ## 📜 Giấy phép
    (Thông tin giấy phép)