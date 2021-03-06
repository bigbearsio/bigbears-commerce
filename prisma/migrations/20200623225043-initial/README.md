# Migration `20200623225043-initial`

This migration has been generated by Max Pijittum at 6/23/2020, 10:50:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."merchants" DROP CONSTRAINT IF EXiSTS "merchants_admin_id_fkey",
DROP CONSTRAINT IF EXiSTS "merchants_country_code_fkey";

ALTER TABLE "public"."users" DROP CONSTRAINT IF EXiSTS "users_country_code_fkey";

ALTER TABLE "public"."merchants" ADD FOREIGN KEY ("admin_id")REFERENCES "public"."users"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."merchants" ADD FOREIGN KEY ("country_code")REFERENCES "public"."countries"("code") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."users" ADD FOREIGN KEY ("country_code")REFERENCES "public"."countries"("code") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200623225043-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,52 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+model countries {
+  code           Int         @id
+  continent_name String?
+  name           String?
+  merchants      merchants[]
+  users          users[]
+}
+
+model merchants {
+  admin_id      Int?
+  country_code  Int?
+  cover_image   String?
+  cover_logo    String?
+  created_at    DateTime?  @default(now())
+  description   String?
+  id            Int        @id
+  merchant_name String?
+  updated_at    DateTime?
+  updated_by    Int?
+  users         users?     @relation(fields: [admin_id], references: [id])
+  countries     countries? @relation(fields: [country_code], references: [code])
+}
+
+model product_category {
+  code                         Int     @id
+  google_product_category_name String?
+  name                         String?
+}
+
+model users {
+  country_code     Int?
+  created_at       DateTime?   @default(now())
+  email            String?
+  fb_id            String?
+  first_name       String?
+  id               Int         @default(autoincrement()) @id
+  last_name        String?
+  profile_logo_url String?
+  updated_at       DateTime?
+  updated_by       Int?
+  countries        countries?  @relation(fields: [country_code], references: [code])
+  merchants        merchants[]
+}
```


