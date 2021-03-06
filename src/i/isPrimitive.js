/* Check if value is string, number, boolean or null.
 *
 * |Name  |Desc                        |
 * |------|----------------------------|
 * |val   |Value to check              |
 * |return|True if value is a primitive|
 */

/* example
 * isPrimitive(5); // -> true
 * isPrimitive('abc'); // -> true
 * isPrimitive(false); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isPrimitive(val: any): boolean;
 */

exports = function(val) {
    const type = typeof val;

    return val == null || (type !== 'function' && type !== 'object');
};
