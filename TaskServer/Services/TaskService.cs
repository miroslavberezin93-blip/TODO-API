using TaskServer.Dto;
using TaskServer.DATA;
using Microsoft.EntityFrameworkCore;
using TaskServer.Models;
using Microsoft.OpenApi;

namespace TaskServer.Services
{
    public class TaskService : ITaskService
    {
        private readonly AppDbContext _context;

        public TaskService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TaskDto>> GetTasksAsync(int userId)
        {
            var tasks = await _context.Tasks
                .Where(t => t.UserId == userId).Select(t => new TaskDto
                {
                    Id = t.Id,
                    Description = t.Description,
                    Completed = t.Completed,
                }).ToListAsync();

            return tasks;
        }

        public async Task<TaskDto> CreateTaskAsync(int userId, TaskCreateDto taskCreateDto)
        {
            var task = new TaskItem
            {
                Title = taskCreateDto.Title,
                Description = taskCreateDto.Description,
                Completed = false,
                UserId = userId
            };
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
            var taskDto = new TaskDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                Completed = task.Completed
            };
            return taskDto;
        }

        public async Task<TaskDto?> UpdateTaskByIdAsync(int userId, int taskId, TaskUpdateDto taskUpdateDto)
        {
            var task = await _context.Tasks.SingleOrDefaultAsync(t => t.Id == taskId);
            if (task == null) return null;
            task.Title = taskUpdateDto.Title ?? task.Title;
            task.Description = taskUpdateDto.Description ?? task.Description;
            task.Completed = taskUpdateDto?.Completed ?? task.Completed;
            await _context.SaveChangesAsync();
            var taskDto = new TaskDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                Completed = task.Completed
            };
            return taskDto;
        }

        public async Task<bool> DeleteTaskByIdAsync(int userId, int taskId)
        {

        }
    }
}