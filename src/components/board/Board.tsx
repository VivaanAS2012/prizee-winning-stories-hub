
import { useState } from "react";
import { Column, Task, TaskStatus } from "@/types/task";
import { TaskColumn } from "./TaskColumn";
import { CreateTaskDialog } from "./CreateTaskDialog";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const initialColumns: Column[] = [
  { id: "todo", title: "To Do", tasks: [] },
  { id: "in-progress", title: "In Progress", tasks: [] },
  { id: "completed", title: "Completed", tasks: [] },
];

export function Board() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const addTask = (task: Task) => {
    setColumns(columns.map(column => 
      column.id === "todo" 
        ? { ...column, tasks: [...column.tasks, task] }
        : column
    ));
  };

  const moveTask = (taskId: string, from: TaskStatus, to: TaskStatus) => {
    const task = columns.find(c => c.id === from)?.tasks.find(t => t.id === taskId);
    if (!task) return;

    setColumns(columns.map(column => {
      if (column.id === from) {
        return { ...column, tasks: column.tasks.filter(t => t.id !== taskId) };
      }
      if (column.id === to) {
        return { ...column, tasks: [...column.tasks, { ...task, status: to }] };
      }
      return column;
    }));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-[1400px] mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Project Board</h1>
          <Button onClick={() => setIsCreateDialogOpen(true)} size="sm" className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Add Task
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <TaskColumn
              key={column.id}
              column={column}
              onMoveTask={moveTask}
            />
          ))}
        </div>

        <CreateTaskDialog
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          onSubmit={addTask}
        />
      </div>
    </div>
  );
}
