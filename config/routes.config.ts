import { Application } from "express";

export default function (app: Application): void {
    const prefix_url = "/api/v1";

    app.use(prefix_url,
        require("../www/tasks/tasks.routes").default(),
        // require("../www/products/products.routes").default(),
        // require("../www/catalogs/catalogs.routes").default(),
        // require("../www/campaigns/campaigns.routes").default(),
        // require("../www/clients/clients.routes").default(),
        // require("../www/reports/reports.routes").default(),
        // require("../www/order_products/orderProducts.routes").default(),
        // require("../www/orders/orders.routes").default(),
        // require("../www/users/users.routes").default(),
        // require("../www/companies/companies.routes").default(),
    );
}