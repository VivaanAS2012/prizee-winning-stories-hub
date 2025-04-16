
import { Column, TaskStatus } from "@/types/task";
import { TaskCard } from "./TaskCard";

interface TaskColumnProps {
  column: Column;
  onMoveTask: (taskId: string, from: TaskStatus, to: TaskStatus) => void;
}

export function TaskColumn({ column, onMoveTask }: TaskColumnProps) {
  return (
    <div className="bg-card/95 rounded-xl border shadow-md hover:shadow-lg transition-all duration-200">
      <div className="p-4 border-b bg-accent/5">
        <h2 className="font-semibold text-lg tracking-tight">{column.title}</h2>
      </div>
      
      <div className="p-4 space-y-3">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={(newStatus) => onMoveTask(task.id, task.status, newStatus)}
          />
        ))}
        {column.tasks.length === 0 && (
          <p className="text-muted-foreground text-sm text-center py-8 italic">
            No tasks yet
          </p>
        )}
      </div>
    </div>
  );
}
