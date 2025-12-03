export class User {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  role!: "admin" | "employee";
  createdAt!: Date;
  updatedAt!: Date;
}

export type SafeUser = Omit<User, "password">;
