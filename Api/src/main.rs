use actix_web::{get, post, web, App, HttpRequest, HttpResponse, HttpServer, Result};

#[get("/show")]
async fn show_users() -> HttpResponse {
  HttpResponse::Ok().body("Show users")
}

#[post("/test")]
async fn index(req: HttpRequest) -> Result<String> {
  let test = req.path();
  Ok(format!("path {}", test))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  HttpServer::new(|| App::new().service(index))
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
