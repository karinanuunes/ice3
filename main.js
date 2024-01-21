const catalogo = document.getElementById("catalogo");
const ordem = document.getElementById("ordem");
const cadastro = document.getElementById("cadastro");
const about = document.getElementById("about");
const tabela = document.getElementById("tabela");
const contato = document.getElementById("contato");

function abrirSobre() {
  catalogo.style.display = "none";
  ordem.style.display = "none";
  cadastro.style.display = "none";
  tabela.style.display = "none";
  contato.style.display = "none";

  about.style.display = "flex";
  about.innerHTML = `
    <img src="./images/banner.png" alt="Homem de sueter preto e chapéu preto sorrindo para o chão com as mãos no bolso" class="banner">
    <p>
      Na Ice Cube, acreditamos que a moda deve ser compartilhada e vivida em conjunto. É por isso que valorizamos nossa presença nas redes sociais e convidamos você a se juntar a nós nessa jornada. Siga-nos nas redes sociais para fazer parte de nossa comunidade vibrante de entusiastas da moda. Mantenha-se atualizado com as últimas tendências, participe de concursos exclusivos, e mergulhe em um mundo de inspiração e estilo. Estamos ansiosos para compartilhar nossa paixão pela moda com você e criar laços mais fortes nas redes sociais. Junte-se a nós hoje e faça parte dessa jornada emocionante!
      <br /><br />
      Nos acompanhe nas redes sociais:<br /><br />
      <a href="https://linkedin.com/in/karinanuunes/"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a><br />
      <a href="https://github.com/karinanuunes" target="_blank"><ion-icon name="logo-github"></ion-icon> GitHub</a><br />
      <a href="https://instagram.com/karinanuunes" target="_blank"><ion-icon name="logo-instagram"></ion-icon> Instagram</a>
    </p>
  `;
}

function abrirTabela() {
  catalogo.style.display = "none";
  ordem.style.display = "none";
  cadastro.style.display = "none";
  about.style.display = "none";
  contato.style.display = "none";

  tabela.style.display = "flex";
  tabela.innerHTML = `
    <div id="conteudoTab">
      <p>
        Queremos que você tenha total transparência na hora de fazer sua escolha. Na Ice Cube, estamos comprometidos em oferecer produtos de alta qualidade a preços acessíveis. Navegue pela nossa variedade de moletoms e descubra que estilo e conforto podem ser perfeitamente equilibrados. Os preços justos que praticamos são um reflexo do nosso compromisso em tornar a moda contemporânea ao alcance de todos. Não hesite em explorar nossa gama de produtos - a qualidade e o valor de cada peça falarão por si mesmos. Queremos que você faça sua escolha com confiança, sabendo que está investindo em qualidade, estilo e conforto a um preço que faz sentido para você.
      </p>
    </div>
    <img src="./images/medidas.png" alt="Imagem com desenho de moletom e indicação das medidas">
    <table border="1">
      <thead>
        <tr>
          <th>Tamanho</th>
          <th>Comprimento</th>
          <th>Largura</th>
          <th>Manga</th>
        </tr>
      </thead>
      <tr>
        <td>PP</td>
        <td>57,5 cm</td>
        <td>50 cm</td>
        <td>56 cm</td>
      </tr>
      <tr>
        <td>P</td>
        <td>60,5 cm</td>
        <td>53 cm</td>
        <td>59 cm</td>
      </tr>
      <tr>
        <td>M</td>
        <td>63,5 cm</td>
        <td>56 cm</td>
        <td>62 cm</td>
      </tr>
      <tr>
        <td>G</td>
        <td>66,5 cm</td>
        <td>59 cm</td>
        <td>65 cm</td>
      </tr>
      <tr>
        <td>GG</td>
        <td>71,5 cm</td>
        <td>64 cm</td>
        <td>70 cm</td>
      </tr>
    </table>
  `;
}

function abrirContato() {
  catalogo.style.display = "none";
  ordem.style.display = "none";
  cadastro.style.display = "none";
  about.style.display = "none";
  tabela.style.display = "none";

  contato.style.display = "flex";
  contato.innerHTML = `
    <p>
      Estamos ansiosos para ouvir de você! Sua opinião é fundamental para nós na Ice Cube. Se tiver alguma dúvida, comentário ou solicitação especial, não hesite em entrar em contato conosco. Nossa equipe de atendimento ao cliente está à disposição para ajudá-lo em todos os aspectos. Queremos garantir que sua experiência conosco seja excepcional. Entre em contato da maneira que preferir - seja por telefone, e-mail ou através das redes sociais. Estamos aqui para atender às suas necessidades e tornar sua jornada na Ice Cube ainda mais incrível. Aguardamos ansiosamente seu contato e esperamos poder ajudá-lo em breve!
    </p>
    <section>
      <h1>Conte-me mais sobre sua experiência com a gente!</h1>
      <br />
      <form method="post" action="https://65282114931d71583df1ebce.mockapi.io/api/atvada/users">
        <label for="nome">Nome</label><br />
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" required /><br /><br />
                
        <label for="email">E-mail para contato</label><br />
        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required /><br /><br />
                
        <label for="imagem">Sua foto usando nossos produtos</label><br />
        <input type="file" name="arquivo" id="arquivo"><br /><br />
                
        <label for="ideia">Agora diga do que achou dos nossos produtos, queremos saber tudo!</label><br />
        <textarea name="ideia" id="ideia" cols="50" rows="10"></textarea><br /><br />
                
        <input type="submit" value="Enviar">
      </form>
    </section>
  `;
}

function abrirCadastro() {
  catalogo.style.display = "none";
  ordem.style.display = "none";
  about.style.display = "none";
  tabela.style.display = "none";
  contato.style.display = "none";

  cadastro.style.display = "flex";

  cadastro.innerHTML = `
  <p>
                Queremos lhe dar as boas-vindas para fazer parte da comunidade Ice Cube! Cadastre-se conosco para desfrutar de benefícios exclusivos e estar por dentro das últimas novidades da moda e promoções especiais. Ao se tornar um membro, você terá acesso a ofertas personalizadas, informações antecipadas sobre lançamentos e a conveniência de um processo de compra mais rápido e fácil. Sua jornada conosco será ainda mais incrível quando você se cadastrar na Ice Cube. Inscreva-se agora e comece a desfrutar de todos os privilégios que preparamos para você!
            </p>
            <section id="cadastro">
                <h1>Queremos conhecer você!</h1>

                <br />
                <form method="post" action="https://65282114931d71583df1ebce.mockapi.io/api/atvada/users">
                    <label for="nome">Nome</label><br />
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" required /><br /><br />
                    
                    <label for="data">Data de nascimento</label><br />
                    <input type="date" name="data" id="data" required><br /><br />

                    <label for="regiao">Região do Brasil</label><br />
                    <select name="regiao">
                        <option disabled selected>Selecione sua região</option>
                        <option>Norte</option>
                        <option>Nordeste</option>
                        <option>Centro-Oeste</option>
                        <option>Sudeste</option>
                        <option>Sul</option>
                    </select><br /><br />
                    
                    <label for="email">E-mail</label><br />
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required /><br /><br />

                    <label for="password">Senha</label><br />
                    <input type="password" name="password" id="password" placeholder="Digite uma senha" required />
                    <p>Para a sua segurança, digite uma senha com letras, números e símbolos!</p><br /><br />
                    
                    <input type="submit" value="Registrar">
                    </form>
            </section>
  `;
}
