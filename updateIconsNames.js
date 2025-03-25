import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

// Эмуляция __dirname для ES модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Путь к директории с изображениями
const directoryPath = join(__dirname, 'public', 'newIcons');

// Функция для получения списка файлов
function getFileNamesAsArray(dirPath) {
  try {
    // Чтение содержимого директории
    const files = readdirSync(dirPath);

    // Фильтрация только файлов (исключаем поддиректории)
    const fileNames = files
      .filter((file) => {
        const fullPath = join(dirPath, file);
        return statSync(fullPath).isFile(); // Только файлы
      })
      .map((file) => basename(file, extname(file))); // Убираем расширение у всех файлов

    console.log('Названия файлов:');
    console.log(fileNames);

    // Возвращаем массив названий файлов
    return fileNames;
  } catch (err) {
    console.error('Ошибка при чтении директории:', err);
    return [];
  }
}

// Запуск функции
const imageFileNames = getFileNamesAsArray(directoryPath);

// Сохранение массива в файл
if (imageFileNames.length > 0) {
  const outputPath = join(__dirname, 'newIconsNames.js'); // Можно изменить на .json, если нужно
  const content = `export const imageFileNames = ${JSON.stringify(imageFileNames, null, 2)};`;

  writeFileSync(outputPath, content);
  console.log(`Массив названий файлов сохранён в ${outputPath}`);
}