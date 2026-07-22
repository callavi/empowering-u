import { Button } from "../../shared/components/Button/Button";

export default function UIDesign() {
  return (
    <div>
      <h1>UI Design</h1>
      <h1>Typography </h1>
      <h1>Color Palette</h1>
      <h1>Buttons</h1>
      <div>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Tertiary Button</Button>
        <Button variant="text">Text Button</Button>
        <Button variant="primary" size="small">Small Button</Button>
        <Button variant="primary" size="medium">Medium Button</Button>
        <Button variant="primary" size="large">Large Button</Button>
        <Button variant="primary" disabled>Disabled Button</Button>
        <Button variant="icon">🔍</Button>
        <Button variant="primary" fullWidth>Full Width Button</Button>
        <Button variant="icon" size="small">🔍</Button>
        <Button variant="icon" size="medium">🔍</Button>
        <Button variant="icon" size="large">🔍</Button>
      </div>
    </div>
  );
}