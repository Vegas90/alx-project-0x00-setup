import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex gap-4 mt-4">
        <Button title="Small Button" styles="rounded-sm" />
        <Button title="Medium Button" styles="rounded-lg" />
        <Button title="Large Button" styles="rounded-full" /> 
        <button/>
    </div>
    </div>
  )
}
export default Landing