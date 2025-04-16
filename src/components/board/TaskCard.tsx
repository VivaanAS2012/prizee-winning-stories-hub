
import { Calendar, AlertCircle } from "lucide-react";
import { Task, TaskStatus } from "@/types/task";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <div className="bg-background p-4 rounded-md border shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{task.title}</h3>
        <AlertCircle className={`h-4 w-4 ${priorityColors[task.priority]}`} />
      </div>
      
      {task.description && (
        <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
      )}

      <div className="flex items-center justify-between">
        {task.deadline && (
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(task.deadline).toLocaleDateString()}
          </div>
        )}

        <Select value={task.status} onValueChange={onStatusChange}>
          <SelectTrigger className="h-8 w-[120px]">
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
