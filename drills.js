function jediName (firstName, lastName) {
    let first = firstName.slice(0,2);
    let last = lastName.slice(0,3);
    console.log(`${last}${first}`)
}

jediName("Scott", "Lingner");

