
import { Calendar, AlertCircle } from "lucide-react";
import { Task, TaskStatus } from "@/types/task";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: Task;
  onStatusChange: (status: TaskStatus) => void;
}

export function TaskCard({ task, onStatusChange }: TaskCardProps) {
  const priorityColors = {
    low: "text-green-500",
    medium: "text-yellow-500",
    high: "text-red-500",
  };

  return (
    <div className="bg-card p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium text-sm leading-tight">{task.title}</h3>
        <AlertCircle className={`h-4 w-4 shrink-0 ${priorityColors[task.priority]}`} />
      </div>
      
      <div className="flex items-center justify-between mt-4">
        {task.deadline && (
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1.5" />
            {new Date(task.deadline).toLocaleDateString()}
          </div>
        )}

        <Select value={task.status} onValueChange={onStatusChange}>
          <SelectTrigger className="h-7 w-[110px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todo">To Do</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
