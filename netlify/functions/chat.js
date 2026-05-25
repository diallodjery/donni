export async function handler(event){

const body=
JSON.parse(event.body);

const r=await fetch(
'https://api.groq.com/openai/v1/chat/completions',
{
method:'POST',
headers:{
'Content-Type':'application/json',
'Authorization':
`Bearer ${process.env.GROQ_API_KEY}`
},
body:JSON.stringify({
model:'llama-3.3-70b-versatile',
messages:body.messages
})
});

const data=
await r.json();

return{
statusCode:200,
body:JSON.stringify({
reply:data.choices[0]
.message.content
})
};

}
