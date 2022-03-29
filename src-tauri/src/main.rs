#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use image::DynamicImage;

#[tauri::command]
fn test(file: String) -> Vec<u8> {
  let img = match image::open(file) {
    Ok(c) => c,
    Err(_) => DynamicImage::new_rgb8(10, 10)
  };
   return img.resize(10, 10, image::imageops::FilterType::Nearest).into_bytes();
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![test])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
