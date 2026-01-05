using Microsoft.AspNetCore.Mvc;

namespace TaskServer
{
    [ApiController]
    [Route("tasks")]
    public class TaskController : ControllerBase
    {
        private readonly AppDbContext _context;
        public TaskController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            Console.WriteLine("GET recieved");

            var tasks = _context.Tasks.ToList();

            return Ok(tasks);
        }

        [HttpPost]
        public IActionResult AddNew([FromBody]TaskCreateDto created)
        {
            Console.WriteLine($"new task:{created.Title}");

            var task = new TaskItem {
                Title = created.Title ?? "default",
                Description = created.Description ?? "default",
                Completed = false
            };

            _context.Tasks.Add(task);
            _context.SaveChanges();

            return Ok(task);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTaskById(int id)
        {
            var task = _context.Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();

            Console.WriteLine($"deleted task:{task}");

            _context.Tasks.Remove(task);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPatch("{id}")]
        public IActionResult ChangeTaskStateById(int id, [FromBody]CompleteDto completed)
        {
            Console.WriteLine($"completion changed: id:{id}, completed:{completed.Completed}");

            var task = _context.Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();

            task.Completed = completed.Completed;
            _context.SaveChanges();

            return Ok();
        }

        [HttpPatch("update/{id}")]
        public IActionResult UpdateTaskContentById(int id, [FromBody]TaskUpdateDto update)
        {
            var task = _context.Tasks.FirstOrDefault(t => t.Id == id);

            if (task == null) return NotFound();
            if (update.Title != null) task.Title = update.Title;
            if (update.Description != null) task.Description = update.Description;

            _context.SaveChanges();

            return Ok(task);
        }
    }
}