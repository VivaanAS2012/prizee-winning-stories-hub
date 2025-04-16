
import { Column, TaskStatus } from "@/types/task";
import { TaskCard } from "./TaskCard";

interface TaskColumnProps {
  column: Column;
  onMoveTask: (taskId: string, from: TaskStatus, to: TaskStatus) => void;
}

export function TaskColumn({ column, onMoveTask }: TaskColumnProps) {
  return (
    <div className="bg-card p-4 rounded-lg border">
      <h2 className="font-semibold text-lg mb-4">{column.title}</h2>
      <div className="space-y-3">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={(newStatus) => onMoveTask(task.id, task.status, newStatus)}
          />
        ))}
        {column.tasks.length === 0 && (
          <p className="text-muted-foreground text-sm text-center py-8">
            No tasks yet
          </p>
        )}
      </div>
    </div>
  );
}
