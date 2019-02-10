import { Selector } from 'testcafe';

fixture `Dynamically rendered components`
    .page `http://localhost:8080/`;

test('parent components are rendered as expected', async t=> {
    await t
        .expect(Selector("#firstName").value).eql("First Component")
        .expect(Selector("#secondInput").value).eql("Second Component");
});

test('child component is rendered as expected', async t => {
    await t
        .expect(Selector('#secondInput ~ div #labelComponent').innerText).eql("label component");
})

test('has expected response to events', async t => {
    await t
        .click(Selector("#firstName"))
        .expect(Selector("#firstName").value).eql("Changed")
        .typeText(Selector("#secondInput"), "New input")
        .expect(Selector("#secondInput").value).eql("Second ComponentNew input")
});

