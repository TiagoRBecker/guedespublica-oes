import prisma from "@/server/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
 
  // const items = response.items.map((id: any) => parseInt(id.code));
  
  /*
   
  // Verifica novamente se items não é nulo ou vazio
  if (!items || items.length === 0) {
    throw new Error("A lista de items não pode estar vazia.");
  }
  
  const nfeOptions = {
    buyer: {
      name: "Joao Gomes",
      address: {
        city: {
          code: "4314902",
          name: "Porto Alegre",
        },
        state: "RS",
        district: "Nova Restinga",
        street: "rua petronilha antunes",
        postalCode: "09179-340",
        number: "204",
        country: "BRA",
      },
      email:"beckertiago09@gmail.com",
      federalTaxNumber: 8662968678,
    },
    items: items, // Aqui adicionamos os items ao objeto nfeOptions
  };
  
  const nfe = await fetch(
    `https://api.nfse.io/v2/companies/cb64373f935c452fa54be2222a58458e/productinvoices`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "fLUTQ963opclUK0tlQjyP1Mmk28qft9ntQNDuhhzh6SvtvFrAguBLiuaQWbTKB4LZBO",
      },
      body: JSON.stringify(nfeOptions) // Serializa o objeto nfeOptions como JSON
    }
  );
  const response = await nfe.json()
  console.log(response)
  /* try {
   
    if(data.status === "Issued"){
       console.log(data.id)
     
      let mailOptions = {
        from: '"Nome da Empresa" <seu_email@exemplo.com>', // Remetente
        to: 'destinatario@exemplo.com', // Destinatário
        subject: 'Nota Fiscal Eletrônica (NF-e)', // Assunto
        html: `
          <p>Você recebeu uma Nota Fiscal Eletrônica (NF-e)</p>
          <p>Você está recebendo uma cópia do Arquivo XML anexo.</p>
          <p><strong>Dados da Nota Fiscal Eletrônica (NF-e):</strong></p>
          <ul>
            <li>Nota: 2400146/2</li>
            <li>Pedido: 1007994389</li>
            <li>Chave de acesso: 42240309376495000122550020024001461180217498</li>
            <li>Situação: Autorizado o uso da NF-e</li>
            <li>Destinatário: TIAGO BECKER</li>
            <li>CPF/CNPJ: 02709459035</li>
          </ul>
          <p><strong>O que é a NF-e?</strong></p>
          <p>A Nota Fiscal Eletrônica é um documento digital, emitido e armazenado eletronicamente, com o intuito de documentar, para fins fiscais, uma operação de circulação de mercadorias ou uma prestação de serviços, ocorrida entre as partes. Sua validade jurídica é garantida pela assinatura digital do remetente e pela recepção, pelo Fisco, do documento eletrônico, antes da ocorrência do fato gerador. Mais informações: <a href="http://www.nfe.fazenda.gov.br">www.nfe.fazenda.gov.br</a></p>
          <p><strong>Como verificar a concessão da Autorização de Uso da NF-e?</strong></p>
          <p>Acesse <a href="http://www.nfe.fazenda.gov.br">www.nfe.fazenda.gov.br</a> e clique em Consultas &gt; Resumo de uma Nota Fiscal Eletrônica. Digite a chave de acesso da Nota Fiscal Eletrônica, informada acima e que pode ser também encontrada no DANFE (Documento Auxiliar da Nota Fiscal Eletrônica, impresso e entregue ao destinatário junto a mercadoria). O campo &gt; Situação Atual deve estar preenchido como AUTORIZADO.</p>
          <p>Atenciosamente,</p>
          <p>Nome da Empresa</p>
        `,
        attachments: [
          {
            filename: 'nota_fiscal.xml',
            path: '/caminho/para/arquivo/nota_fiscal.xml' // Substitua pelo caminho real do arquivo XML
          }
        ]
      };
    await   transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Mensagem enviada: %s', info.messageId);
      });
      
    
    }
      
  } catch (error:any) {
    
  }
  */

  return NextResponse.json(
    { message: "E-mail enviado com sucesso" },
    { status: 200 }
  );
}

export async function GET(req: Request, res: Response) {
  let data;
  try {
    data = await req.json();
  } catch (error: any) {
    console.error("Erro ao analisar JSON:", error);
    return NextResponse.json(
      { message: "Erro ao analisar JSON", error: error.message },
      { status: 400 }
    );
  }

  console.log(data);

  return NextResponse.json(
    { message: "E-mail enviado com sucesso" },
    { status: 200 }
  );
}
