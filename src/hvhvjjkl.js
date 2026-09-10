import { z } from "zod";

const userSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8)
    .max(50),
});

app.post("/register", (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error.flatten().fieldErrors);
  }

  // Save user
  res.json({ message: "Success" });
});