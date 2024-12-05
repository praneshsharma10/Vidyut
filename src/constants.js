export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  cplusplus: "13.2.0", 
};

// export const CODE_SNIPPETS = {
//   javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
//   typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
//   python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
//   java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
//   csharp:
//     'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
//   php: "<?php\n\n$name = 'Alex';\necho $name;\n",
// };
export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hi " + name + ", how are you doing today?");\n}\n\ngreet("Pranesh");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hi " + data.name + ", how are you doing today?");\n}\n\ngreet({ name: "Pranesh" });\n`,
  python: `\ndef greet(name):\n\tprint("Hi " + name + ", how are you doing today?")\n\ngreet("Pranesh")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hi Pranesh, how are you doing today?");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hi Pranesh, how are you doing today?");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Pranesh';\necho 'Hi ' . $name . ', how are you doing today?';\n",
  cplusplus: `\n#include <iostream>\nusing namespace std;\n\nvoid greet(string name) {\n\tcout << "Hi " << name << ", how are you doing today?" << endl;\n}\n\nint main() {\n\tgreet("Pranesh");\n\treturn 0;\n}\n`
};
