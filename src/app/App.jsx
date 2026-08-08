import Router from "./routes";
import { MotionConfig } from "motion/react";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router />
    </MotionConfig>
  );
}