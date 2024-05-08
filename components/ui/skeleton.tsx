import { cn } from "@/lib/utils"

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-xl bg-neutral-200", className)}
      {...props}
    />
  )
}

export default Skeleton;
