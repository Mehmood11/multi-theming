"use client";
import { withAuthGuard } from "@/hoc/with-auth-guard";
import DashboardLayout from "@/layout/dashboard";

// export default DashboardLayout;
export default withAuthGuard(DashboardLayout);
