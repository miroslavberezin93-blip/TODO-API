using TaskServer;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod());
});
var app = builder.Build();
var tasks = new List<TaskItem>();
app.UseCors();
app.MapGet("/tasks", () => 
{
    Console.WriteLine(tasks);
    return Results.Ok(tasks);
});
app.MapPost("/tasks", (TaskItem task) =>
{
    Console.WriteLine($"new task:{task.Title}");
    task.Id = tasks.Any() ? tasks.Max(t => t.Id) + 1 : 1;
    tasks.Add(task);
    return Results.Ok(task);
});
app.MapDelete("/tasks/{id}", (int id) =>
{
    var task = tasks.FirstOrDefault(t => t.Id == id);
    if (task == null) return Results.NotFound();
    Console.WriteLine($"deleted task:{task}");
    tasks.Remove(task);
    return Results.Ok();
});
app.MapPatch("/tasks/{id}", (int id, CompletedDto completed) => 
{
    Console.WriteLine($"completion changed: id:{id}, completed:{completed.Completed}");
    var task = tasks.FirstOrDefault(t => t.Id == id);
    if (task == null) return Results.NotFound();
    task.Completed = completed.Completed;
    return Results.Ok();
});
app.Run();