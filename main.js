//EXERCÍCIO 1
int[] idades = {15, 16, 17, 18, 16}; 
for (int idade : idades) { 
 System.out.println(idade); 
}

//EXERCÍCIO 2
class Produto { 
 String nome; 
 double preco; 
 Produto(String nome, double preco) { 
 this.nome = nome; this.preco = preco; 
 } 
} 
public class Main { 
 public static void main(String[] args) { 
 Produto[] produtos = new Produto[3]; 
 produtos[0] = new Produto("Caderno", 25.00); 
 produtos[1] = new Produto("Caneta", 3.50); 
 produtos[2] = new Produto("Mochila", 120.00); 
 for (Produto produto : produtos) 
 System.out.println(produto.nome + " - R$ " + produto.preco); 
 } 
}

//EXERCÍCIO 3
import java.util.ArrayList; 
public class Main { 
 public static void main(String[] args) { 
 ArrayList<Integer> numeros = new ArrayList<>(); 
 numeros.add(10); numeros.add(20); numeros.add(30); 
 numeros.add(40); numeros.add(50); 
 for (Integer numero : numeros) 
 System.out.println(numero); 
 } 
}

//EXERCÍCIO 4
import java.util.ArrayList; 
public class Main { 
 public static void main(String[] args) { 
 ArrayList<String> nomes = new ArrayList<>(); 
 nomes.add("Ana"); nomes.add("Maria"); nomes.add("João"); 
 nomes.add("Carlos"); nomes.add("Pedro"); 
 System.out.println(nomes.contains("Maria")); 
 nomes.remove("Pedro"); 
 System.out.println(nomes.size()); 
 } 
}

//EXERCÍCIO 5
import java.util.Collection; 
import java.util.ArrayList; 
public class Main { 
 public static void main(String[] args) { 
 Collection<Integer> numeros = new ArrayList<>(); 
 numeros.add(10); numeros.add(20); numeros.add(30); 
 numeros.add(40); numeros.add(50); 
 for (Integer numero : numeros) System.out.println(numero); 
 } 
}

//EXERCÍCIO 6 
import java.util.ArrayList; 
import java.util.Collections; 
ArrayList<Integer> numeros = new ArrayList<>(); 
numeros.add(50); numeros.add(10); numeros.add(30); numeros.add(20); 
Collections.sort(numeros); 
System.out.println(numeros); 

//EXERCÍCIO 7
import java.util.ArrayList; 
import java.util.Collections; 
public class Main { 
 public static void main(String[] args) { 
 ArrayList<String> nomes = new ArrayList<>(); 
 nomes.add("Carlos"); nomes.add("Ana"); nomes.add("Pedro"); 
 nomes.add("Maria"); nomes.add("João"); 
 Collections.sort(nomes); 
 System.out.println(nomes); 
 } 
}

//EXERCÍCIO 8 
import java.util.ArrayList; 
public class Main { 
 public static void main(String[] args) { 
 ArrayList<Integer> numeros = new ArrayList<>(); 
 numeros.add(5); numeros.add(15); numeros.add(20); 
 numeros.add(8); numeros.add(30); 
 numeros.forEach(numero -> { 
 if (numero > 10) System.out.println(numero); 
 }); 
 } 
}

//EXERCÍCIO 9
import java.io.BufferedReader; 
import java.io.FileReader; 
public class Main { 
 public static void main(String[] args) throws Exception { 
 BufferedReader leitor = new BufferedReader(new FileReader("alunos.txt")); 
 String linha; 
 while ((linha = leitor.readLine()) != null) 
 System.out.println(linha); 
 leitor.close(); 
 } 
}

//EXERCÍCIO 10
import java.io.FileWriter; 
public class Main { 
 public static void main(String[] args) throws Exception { 
 FileWriter escritor = new FileWriter("alunos.txt"); 
 escritor.write("Ana\n"); 
 escritor.write("João\n"); 
 escritor.write("Maria\n"); 
 escritor.close(); 
 } 
}


//EXERCÍCIO 11
import java.io.FileWriter; 
import java.io.PrintWriter; 
public class Main { 
 public static void main(String[] args) throws Exception { 
 PrintWriter escritor = new PrintWriter(new FileWriter("produtos.txt")); 
 escritor.println("Caderno"); 
 escritor.println("Caneta"); 
 escritor.println("Mochila"); 
 escritor.close(); 
 } 
}


//EXERCÍCIO 12
import java.util.Scanner; 
public class Main { 
 public static void main(String[] args) { 
 Scanner entrada = new Scanner(System.in); 
 System.out.print("Nome: "); 
 String nome = entrada.nextLine(); 
 System.out.print("Idade: "); 
 int idade = entrada.nextInt(); 
 System.out.println("Olá, " + nome + "! Você tem " + idade + " anos."); 
 entrada.close(); 
 } 
}


//EXERCÍCIO 13
import java.nio.charset.StandardCharsets; 
import java.nio.file.Files; 
import java.nio.file.Path; 
public class Main { 
 public static void main(String[] args) throws Exception { 
 Path arquivo = Path.of("texto.txt"); 
 Files.writeString(arquivo, "Programação é muito interessante!", StandardCharsets.UTF_8); 
 String texto = Files.readString(arquivo, StandardCharsets.UTF_8); 
 System.out.println(texto); 
 } 
}

//EXERCÍCIO 14
import java.io.*; 
class Produto implements Serializable { 
 String nome; double preco; 
 Produto(String nome, double preco) { 
 this.nome = nome; this.preco = preco; 
 } 
} 
public class Main { 
 public static void main(String[] args) throws Exception { 
 Produto produto = new Produto("Notebook", 3500.00); 
 ObjectOutputStream escritor = new ObjectOutputStream( 
 new FileOutputStream("produto.dat") 
 ); 
 escritor.writeObject(produto); 
 escritor.close(); 
 } 
}



//EXERCÍCIO 15
import java.util.ArrayList; 
public class Main { 
 public static void main(String[] args) { 
 ArrayList<String> frutas = new ArrayList<>(); 
 frutas.add("Maçã"); frutas.add("Banana"); 
 frutas.add("Laranja"); frutas.add("Uva"); 
 frutas.set(1, "Manga"); 
 frutas.remove("Laranja"); 
 System.out.println(frutas); 
 } 
}


//EXERCÍCIO 16 
import java.util.ArrayList; 
class Produto { 
 String nome; double preco; 
 Produto(String nome, double preco) { 
 this.nome = nome; this.preco = preco; 
 } 
} 
public class Main { 
 public static void main(String[] args) { 
 ArrayList<Produto> produtos = new ArrayList<>(); 
 produtos.add(new Produto("Caderno", 25)); 
 produtos.add(new Produto("Caneta", 3)); 
 produtos.add(new Produto("Mochila", 100)); 
 for (Produto p : produtos) 
 System.out.println(p.nome + " - R$ " + p.preco); 
 } 
}


//EXERCÍCIO 17
import java.util.ArrayList; 
class Disciplina { 
 String nome; 
 Disciplina(String nome) { this.nome = nome; } 
} 
class Professor { 
 String nome; 
 ArrayList<Disciplina> disciplinas = new ArrayList<>(); 
 Professor(String nome) { this.nome = nome; } 
} 
public class Main { 
 public static void main(String[] args) { 
 Professor professor = new Professor("Carlos"); 
 professor.disciplinas.add(new Disciplina("Java")); 
 professor.disciplinas.add(new Disciplina("Banco de Dados")); 
 System.out.println(professor.nome); 
 for (Disciplina d : professor.disciplinas) 
 System.out.println(d.nome); 
 } 
}


//EXERCÍCIO 18
import java.util.HashSet; 
import java.util.Set; 
public class Main { 
 public static void main(String[] args) { 
 Set<Integer> numeros = new HashSet<>(); 
 numeros.add(10); numeros.add(20); numeros.add(10); 
 numeros.add(30); numeros.add(20); numeros.add(40); 
 System.out.println(numeros); 
 } 
}

//EXERCÍCIO 19
import java.util.HashSet; 
import java.util.Set; 
public class Main { 
 public static void main(String[] args) { 
 Set<String> produtos = new HashSet<>(); 
 produtos.add("A10"); produtos.add("B20"); 
 produtos.add("A10"); produtos.add("C30"); produtos.add("B20"); 
 System.out.println(produtos); 
 } 
}



//EXERCÍCIO 20
import java.util.HashSet; 
import java.util.Objects; 
import java.util.Set; 
class Produto { 
 String codigo, nome; double preco; 
 Produto(String codigo, String nome, double preco) { 
 this.codigo = codigo; this.nome = nome; this.preco = preco; 
 } 
 @Override 
 public boolean equals(Object obj) { 
 if (this == obj) return true; 
 if (!(obj instanceof Produto)) return false; 
 Produto outro = (Produto) obj; 
 return codigo.equals(outro.codigo); 
 } 
 @Override 
 public int hashCode() { return Objects.hash(codigo); } 
} 
public class Main { 
 public static void main(String[] args) { 
 Set<Produto> produtos = new HashSet<>(); 
 produtos.add(new Produto("P01", "Caderno", 25)); 
 produtos.add(new Produto("P02", "Caneta", 3.5)); 
 produtos.add(new Produto("P01", "Caderno Especial", 30)); 
 produtos.add(new Produto("P03", "Mochila", 120)); 
 System.out.println("Quantidade: " + produtos.size()); 
 } 
}

//