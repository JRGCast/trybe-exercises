import smtplib
import ssl


class User:
    def __init__(self, name, email, password, from_email, from_password):
        self.name = name
        self.email = email
        self.password = password
        self.from_email = from_email
        self.from_password = from_password

    def reset_password(self):
        """ Só com isso a função não irá funcionar! O email em
        questão não existe e pode ser necessário configurar
        algo no servidor de emails para o envio ocorrer. Se
        quiser, explore isso como exercício bônus! Por hora,
        basta entender a lógica aqui! """

        subject = "Reset your password"
        message = "Instruções para resetar a senha, com o link de resetar"
        body = f"Subject:{subject}\n\n{message}"
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(self.from_email, self.from_password)
            try:
                server.sendmail(self.from_email, self.to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise ValueError


meu_user = User("Valentino Trocatapa",
                "valentino@tinytoons.com",
                "Grana",
                "password_reset@teste.com",
                "myverysafepassword")
meu_user.reset_password()

# Feitas as devidas configurações no servidor do email essa lógica funciona, mas temos um problema sério aqui! Você sabe dizer qual é?
# Leia o código do final. Estamos criando uma entidade (aliás, estamos instânciando um objeto!) User . Para criá-la, estamos passando seu nome, email, senha e... o email de envio de reset de senha e a senha desse email. Se tivermos mil users teremos sempre o mesmo email de reset e a mesma senha! Note como o construtor de User está lotado de atribuições! E cada instância que criarmos vai ter uma cópia das informações do enviador de emails. Pra quê? Pra nada. Não precisamos disso.
# Bora arrumar o código então?
# Lembre-se do primeiro pilar de POO, a Abstração ! Se uma lógica parece não pertencer a uma entidade, extraia-a para uma outra entidade, ou para uma entidade nova! Sempre comece por aí para organizar o seu código. No nosso caso, que tal criamos um enviador de emails? O nome faz sentido, não faz? O nome mais literal possível que podemos dar para uma entidade que envia emails é Enviador de Emails . Em inglês, Mailer . Então é esse o nome que daremos. Bom!
