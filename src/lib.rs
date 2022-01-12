use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn subtract(a: i32, b: i32) -> i32 {
    a - b
}

#[wasm_bindgen]
pub fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

#[wasm_bindgen]
pub fn divide(a: i32, b: i32) -> i32 {
    if a == 0 || b == 0 {
        return 0;
    } else {
        a / b
    }
}

#[wasm_bindgen]
pub fn speed_test() -> i64 {
    let mut count: i64 = 0;
    while count < 1000000000 {
        count = count + 1;
    }

    return count;
}
