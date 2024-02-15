/// <reference types="@typescript-to-lua/language-extensions" />
/// <reference types="lua-types/5.3" />
//////////////////////////////////////////////////////////////////////////////
//                     GNU GENERAL PUBLIC LICENSE                           //
//                        Version 3, 29 June 2007                           //
//                                                                          //
//  Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>     //
//  Everyone is permitted to copy and distribute verbatim copies            //
//  of this license document, but changing it is not allowed.               //
//////////////////////////////////////////////////////////////////////////////


/**
 * OpenOS's Binding.
 * The JSDoc is not finished yet, most of the code samples are still in Lua.
 * @untested Most of them are untested. If anything went wrong, please open a GitHub issue or do a pull request.
 * @untested Functions that can possibily returns `null` are not specifying it in OpenComputer's document. Some functions may be returning null without having `null` as return type in method signature/descriptor.
 * @todo There are "trits" package in OpenComputer's source, but we got no any simular things.
 * @hardcoded This part of code is hard coded, any incremental OpenComputer update requires a remap 
 * @author fan87
 */

/**
 * The first return value will always be false, and the second return value will be the reason (`java.lang.Throwable#getMessage()`)
 * The reason why it's named `InternalError` is because if the bound method throws an exception (Java side), it will return false and a reason message
 */
type InternalError = LuaMultiReturn<[false, string]>
type UUID = string
/**
 * Position vector object that's used by some mods
 */
interface Vector3 {x: number, y: number, z: number}

/** 
 * @noSelf 
 * @see https://ocdoc.cil.li/api:non-standard-lua-libs#operating_system_facilities
**/
declare module "os" {
    /**
     * has been reimplemented to return the approximate CPU time, meaning the time the computer has actually been running in an executor thread.
     * This is not the same as the time the computer has been running, for that see {@link computer.uptime}.
     */
    export function clock(): number
    
    /**
     * has been reimplemented to use ingame time and supports most formats.
     */
    export function date(): string

    /**
     * has been reimplemented to start programs from a mounted filesystem via {@link shell.execute}. The specified string is parsed the same as 
     * commands entered in the shell.
     * @param command The command to be exeucted.
     */
    export function execute(command: string): boolean | null

    /**
     * Throws an error to try and terminate the current coroutine.
     * @return Unknown, and can't be accessed.
     */
    export function exit(): any

    /**
     * Set a shell's environment variable
     * @param key Name of the envrionment varibale name
     * @param value The value you'd like to set it to
     */
    export function setenv(key: string, value: string): string | null

    /**
     * Get the shell's environment variable
     * @param key Name of the environment variable name
     */
    export function getenv(key: string): string | null

    /**
     * Undocumented, but appearly it substracts the first parameter with second parmeter.
     */
    export function difftime(first: number, second: number): number

    /**
     * Renames/moves an object from the first specified absolute path in the file system to the second.
     * @param from 
     * @param to 
     */
    export function rename(from: string, to: string): void

    /**
     * Removes the object at the specified absolute path in the file system.
     * @param path 
     */
    export function remove(path: string): void

    /**
     * Pauses the code execution (AKA sleep a thread) for the specified amount of time.
     */
    export function sleep(second: number): void
    
    /**
     * Generate an unused name in the `/tmp` mount.
     */
    export function tmpname(): string
}

/** 
 * @noSelf
 * @see https://ocdoc.cil.li/api:keyboard
 */
declare module "keyboard" {
    /**
     * All keys. To access number keys (0 - 9), please use `(keyboard.keys as any)["<key>"]`
     * @see https://github.com/MightyPirates/OpenComputers/blob/master-MC1.7.10/src/main/resources/assets/opencomputers/loot/openos/lib/core/full_keyboard.lua
     * @noSelf
     */
    export interface KeysDeclaration {
        // keys["1"]: number;
        // keys["2"]: number;
        // keys["3"]: number;
        // keys["4"]: number;
        // keys["5"]: number;
        // keys["6"]: number;
        // keys["7"]: number;
        // keys["8"]: number;
        // keys["9"]: number;
        // keys["0"]: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
        h: number;
        i: number;
        j: number;
        k: number;
        l: number;
        m: number;
        n: number;
        o: number;
        p: number;
        q: number;
        r: number;
        s: number;
        t: number;
        u: number;
        v: number;
        w: number;
        x: number;
        y: number;
        z: number;
    
        apostrophe: number;
        at: number;
        back: number; // backspace
        backslash: number;
        capital: number; // capslock
        colon: number;
        comma: number;
        enter: number;
        equals: number;
        grave: number; // accent grave
        lbracket: number;
        lcontrol: number;
        lmenu: number; // left Alt
        lshift: number;
        minus: number;
        numlock: number;
        pause: number;
        period: number;
        rbracket: number;
        rcontrol: number;
        rmenu: number; // right Alt
        rshift: number;
        scroll: number; // Scroll Lock
        semicolon: number;
        slash: number; // / on main keyboard
        space: number;
        stop: number;
        tab: number;
        underline: number;
    
        // Keypad (and numpad with numlock off)
        up: number;
        down: number;
        left: number;
        right: number;
        home: number;
        end: number;
        pageUp: number;
        pageDown: number;
        insert: number;
        delete: number;
    
        // Function keys
        f1: number;
        f2: number;
        f3: number;
        f4: number;
        f5: number;
        f6: number;
        f7: number;
        f8: number;
        f9: number;
        f10: number;
        f11: number;
        f12: number;
        f13: number;
        f14: number;
        f15: number;
        f16: number;
        f17: number;
        f18: number;
        f19: number;
    
        // Japanese keyboards
        kana: number;
        kanji: number;
        convert: number;
        noconvert: number;
        yen: number;
        circumflex: number;
        ax: number;
    
        // Numpad
        numpad0: number;
        numpad1: number;
        numpad2: number;
        numpad3: number;
        numpad4: number;
        numpad5: number;
        numpad6: number;
        numpad7: number;
        numpad8: number;
        numpad9: number;
        numpadmul: number;
        numpaddiv: number;
        numpadsub: number;
        numpadadd: number;
        numpaddecimal: number;
        numpadcomma: number;
        numpadenter: number;
        numpadequals: number;
    }

    /**
     * Returns table of all keycodes. This is a two-directional table,, for example, the value of `keyboard.keys.numpad0` is `0x52`,
     * and the value of `(keyboard.keys as any)[0x52]` is the string `numpad0`.
     * @see {@link KeysDeclaration}
     */
    export var keys: KeysDeclaration

    /**
     * Checks if one of the Alt keys is currently being held by some user.
     */
    export function isAltDown(): boolean

    /**
     * Checks if the specified character (from a keyboard event for example) is a control character as defined by Java's `Character`
     * class. Control characters are usually not printable.
     */
    export function isControl(char: number): boolean

    /**
     * Checks if one of the Control keys is currently being held by some user.
     */
    export function isControlDown(): boolean

    /**
     * Checks if a specific key is currently being by some user. If a number is specified it is assumed it's a key code. If a string
     * is specified it is assumed it's a single character, such as the ones passed by keyboard events.
     */
    export function isKeyDown(charOrCode: string | number): boolean

    /**
     * Checks if one of the Shift keys is currently being held by some user.
     */
    export function isShiftDown(): boolean

}

/** 
 * This “API” serves a global table that allows you to refer to colors by their name, instead of their associated ID/number. 
 * The table serves as a look-up in both directions, so for example `colors.blue` has the value `11`, whereas `(colors as any)[11]` 
 * has the string value `blue`. These are the defined colors:
 * - White (`white`), Number: 0
 * - Orange (`orange`), Number: 1
 * - Magenta (`magenta`), Number: 2
 * - Light Blue (`lightblue`), Number: 3
 * - Yellow (`yellow`), Number: 4
 * - Lime (`lime`), Number: 5
 * - Pink (`pink`), Number: 6
 * - Gray (`gray`), Number: 7
 * - Silver (`silver`), Number: 8
 * - Cyan (`cyan`), Number: 9
 * - Purple (`purple`), Number: 10
 * - Blue (`blue`), Number: 11
 * - Brown (`brown`), Number: 12
 * - Green (`green`), Number: 13
 * - Red (`red`), Number: 14
 * - Black (`black`), Number: 15
 * @noSelf
 * @see https://ocdoc.cil.li/api:colors
 */
declare module "colors" {
    export const white: number
    export const orange: number
    export const megenta: number
    export const lightblue: number
    export const yellow: number
    export const lime: number
    export const pink: number
    export const gray: number
    export const silver: number
    export const cyan: number
    export const purple: number
    export const blue: number
    export const brown: number
    export const green: number
    export const red: number
    export const black: number
}

/** 
 * This “API” provides a global table to allow you to refer to sides / directions by name, as opposed to their numbers. The underlying number values are identical to Minecraft's internal numbering (as well as the `ForgeDirection` Enum). This table serves as a two-directional look-up, so you can resolve names to numbers, but also numbers back to a human readable name. For example, `sides.top` has the value `1`, whereas `sides[1]` has the string value `top`. A couple of aliases for the side names are available, so it's less likely to accidentally pick the wrong one. These are the basic values:
 * 
 * - Bottom (`bottom`), Number: 0
 * - Top (`top`), Number: 1
 * - Back (`back`), Number: 2
 * - Front (`front`), Number: 3
 * - Right (`right`), Number: 4
 * - Left (`left`), Number: 5
 * 
 * The following aliases are defined per default:
 * 
 * - Bottom: `down`, `negy`
 * - Top: `up`, `posy`
 * - Back: `north`, `negz`
 * - Front: `south`, `posz`, `forward`
 * - Right: `west`, `negx`
 * - Left: `east`, `posx`
 * 
 * Useful for setting or getting redstone outputs or inputs, for example:
 * @noSelf
 * @see https://ocdoc.cil.li/api:sides
 */
 declare module "sides" {
    export const bottom: number
    export const top: number
    export const back: number
    export const front: number
    export const right: number
    export const left: number

    export const down: number
    export const up: number
    export const north: number
    export const south: number
    export const west: number
    export const east: number
    
    export const negy: number
    export const posy: number
    export const negz: number
    export const posz: number
    export const forward: number
    export const negx: number
    export const posx: number
}

/**
 * The `buffer` library provides user friendly streams. These are the kind that the `io` library returns from `io.open`
 *  **unlike** the raw streams returned by `filesystem.open` which don't support as many helpful methods. These helper
 *  methods on the file handles you get from `io.open` are defined here, under 
 * [Instance Methods](https://ocdoc.cil.li/api:buffer#instance_methods). Thus, this API documentation is important and
 *  helpful even if you aren't building your own buffered streams.
 *
 * Additionally, this API allows you to create buffered streams. You provide the backend stream read and write, the
 *  buffer library provides the formatting and buffering of the data. Generally, users will not need to make their own
 *  buffered streams. For reference, the io library uses buffered streams (which includes file io as well as terminal io)
 */
interface OpenOsBuffer {
    /**
     * If any data is buffered it is immediately written to the stream and released.
     */
    flush(): void

    /**
     * Flushes the buffer and closes the wrapped stream.
     */
    close(): void

    /**
     * Sets the buffering `mode` and `size` and returns the result `mode` and `size`. The amount of data buffered is
     *  specified by `size` which defaults to [512, 8192] bytes, depending on available system memory. `mode` and
     *  `size` can be nil, in which case the previous values are used for either. `size` is also used in `read(n)` calls
     *  to the stream.
     * Modes only affect `write`, which include:
     * 
     * - “no” writes are immediately pushed to the stream.
     * - “full” writes are buffered up to `size` bytes. This is the default mode.
     * - “line” writes are buffered until newlines are found or `size` is reached, whichever comes first.
     */
    setvbuf(mode: "no" | "full" | "line", size: number): LuaMultiReturn<[string, number]>

    /**
     * Writes each `value` to the stream, first buffering based on the mode and buffer size (see {@link buffer.setvbuf}). Note that
     *  to write to a file, you have to open it for *write*.
     */
    write(value: any): void

    /**
     * Returns a function iterator which reads from the stream until it reaches nil. On each read, the `line_formats` list of args as
     *  passed to `stream:read(...)`. The overwhelmingly typical use is to not define `line_formats`, i.e. passing no args to `lines()`.
     * The default behavior (i..e without `line_formats`) is to read a “line” at a time from the stream.
     */
    lines(format?: number | "*n" | "*number" | "*l" | "*line" | "*L" | "*Line" | "*a" | "*all"): LuaIterable<string>

    /**
     * A fairly advanced reader that support various formats. First of all, if called with no `format`, i.e an empty
     *  param list, it reads the next line from the stream, which is equivalent to `read("*l")`
     * Each `format` is read from the stream and all returned in a multiple return value list of the results. Note
     *  all format strings are prefixed with * and also note that only the first char of the string names of the
     *  formats matters, the rest is ignored. These are the supported formats:
     * 
     * - a number value, e.g. `10`
     * 
     *   Read **n** bytes (in binary mode) or chars (in text mode) from the stream; result is returned as a string.
     *  See [io.open](https://ocdoc.cil.li/api:non-standard-lua-libs#input_and_output_facilities) for more details
     *  about how to open files in different modes.
     * 
     *   `local chars = b:read(10)`
     * 
     * - “*n” or “*number”
     * 
     *   Read the next series of bytes from the stream that can be interpreted as a number. Note that reading numbers
     *  is also affected by the open mode, binary or text. See
     *  [io.open](https://ocdoc.cil.li/api:non-standard-lua-libs#input_and_output_facilities) for more details about
     *  how to open files in different modes..
     * 
     *   `local number = b:read("*n")`
     * 
     * - “*l” or “*line”
     * 
     *   Read the next line from the stream, chopping off the line ending marker (which may be \n, \r, or \r\n)
     * 
     *   `local line = b:read("*l")`
     * 
     * - “*L” or “*Line”
     * 
     *   Read the next line from the stream, like “*line”, but preserves the line ending marker as part of the result
     * 
     *   `local whole_line = b:read("*L")`
     * 
     * - “*a” or “*all”
     * 
     *   Reads all remaining data from the stream until nil. There would be no point in having formats following this.
     * 
     *   `local the_whole_file = b:read("*a")`
     */
    // TODO: It returns `string...`, but I don't know how to do it in TypeScriptToLua
    read(format?: number | "*n" | "*number" | "*l" | "*line" | "*L" | "*Line" | "*a" | "*all"): string

    /**
     * Returns the current timeout (in seconds) set on the buffered stream. `math.huge` is the default timeout. Read
     *  `setTimeout` for more information about the effects of a buffered stream timeout.
     */
    getTimeout(): number

    /**
     * Sets the time in seconds a buffered stream will try to limit a `read` operation. Note that this timeout cannot
     *  be strictly adhered to. A read operation that completes within a single `readChunk` (an internal method that
     *  invokes the actual `read` on the stream) does not check the `timeout` limit. Timeout is only checked between
     *  stream reads within a single buffered read (an example follows). Thus, if a read requires multiple chunk reads,
     *  and the time between the start of the first read before the start of the last read is greater than or equal to
     *  the timeout, then the buffered stream will error. Again note that a timeout is default `math.huge`.
     */
    setTimeout(timeout: number): void

    /**
     * Moves the stream position by `offset` bytes from `whence`, both optional params. `whence` defaults to “cur”, and `offset` defaults to 0. Valid `whence` values:
     * 
     * - “cur” from the current position.
     * - “set” from the start of the stream.
     * - “end” from the end of the stream. Returns the result of the seek operation on the stream (which may fail).
     */
    seek(whence: "cur" | "set" | "end", offset: number): void
}

/**
 * @see https://ocdoc.cil.li/api:filesystem
 * @noSelf
 */
declare module "filesystem" {
    /**
     * Returns whether autorun is currently enabled. If this is `true`, newly mounted file systems will be checked for a file named `autorun[.lua]` in their root directory. If such a file exists, it is executed.
    */
    export function isAutorunEnabled(): boolean

    /**
     * Sets whether autorun files should be ran on startup.
    */
    export function setAutorunEnabled(value: boolean): void

    /**
     * Returns the canonical form of the specified path, i.e. a path containing no “indirections” such as `.` or `..`. For example, the paths `/tmp/../bin/ls.lua` and `/bin/./ls.lua` are equivalent, and their canonical form is `/bin/ls.lua`.Note that this function truncates relative paths to their topmost “known” directory. For example, `../bin/ls.lua` becomes `bin/ls.lua`. It stays a relative path, however - mind the lack of a leading slash.
    */
    export function canonical(path: string): string

    /**
     * Returns a table containing one entry for each *canonical* segment of the given path. Examples:- `filesystem.segments("foo/bar")` → `{"foo","bar"}`- `filesystem.segments("foo/bar/../baz")` → `{"foo","baz"}`
    */
    export function segments(path: string): string[]

    /**
     * Concatenates two or more paths. Note that all paths other than the first are treated as relative paths, even if they begin with a slash. The canonical form of the resulting concatenated path is returned, so `fs.concat("a", "..")` results in an empty string.
    */
    export function concat(pathA: string, pathB: string, ...extra: any[]): string

    /**
     * Returns the path component of a path to a file, i.e. everything before the last slash in the canonical form of the specified path.
    */
    export function path(path: string): string

    /**
     * Returns the file name component of a path to a file, i.e. everything after the last slash in the canonical form of the specified path.
    */
    export function name(path: string): string

    /**
     * This is similar to `component.proxy`, except that the specified string may also be a file system component's label. We check for the label first, if no file system has the specified label we fall back to `component.proxy`. Returns the proxy of the specified file system, or `nil` and an error message if no file system matching the specified filter was found.
    */
    export function proxy(filter: string): ComponentFileSystem | LuaMultiReturn<[false, string]>

    /**
     * Mounts a file system at the specified path. The first parameter can be either a file system component's proxy, its address or its label. The second is a path into the global directory tree. Returns true if the file system was successfully mounted, `nil` and an error message otherwise.
    */
    export function mount(fs: ComponentFileSystem | string, path: string): boolean | LuaMultiReturn<[false, string]>

    /**
     * Returns an iterator function over all currently mounted file system component's proxies and the paths at which they are mounted. This means the same proxy may appear multiple times, but with different mount paths.
    */
    export function mounts(): () => LuaMultiReturn<[ComponentFileSystem, string]>

    /**
     * Unmounts a file system. The parameter can either be a file system component's proxy or (abbreviated) address, in which case all mount points of this file system will be removed, or a path into the global directory structure, in which case the file system mount containing that directory will be unmounted.
    */
    export function umount(fsOrPath: ComponentFileSystem | string): boolean

    /**
     * Checks if the object at the specified path is a symlink, if so returns the path to where it links (as of 1.3.3).
    */
    export function isLink(path: string): LuaMultiReturn<[boolean, string?]>

    /**
     * Creates a symbolic link to the specified target path at the specified path. This is a 'soft' link, i.e. it the target file does not actually have to exist at the time of creation, and the link will not be deleted if the target file is deleted. Symbolic links do not persist across reboots.
    */
    export function link(target: string, linkpath: string): boolean | LuaMultiReturn<[false, string]>

    /**
     * Gets the file system component's proxy that contains the specified path. Returns the proxy and mount path, or `nil` and an error message.
    */
    export function get(path: string): LuaMultiReturn<[ComponentFileSystem | null, string]>

    /**
     * Checks whether a file or folder exist at the specified path.
    */
    export function exists(path: string): boolean

    /**
     * Gets the file size of the file at the specified location. Returns 0 if the path points to anything other than a file.
    */
    export function size(path: string): number

    /**
     * Gets whether the path points to a directory. Returns false if not, either because the path points to a file, or `file.exists(path)` is false.
    */
    export function isDirectory(path: string): boolean

    /**
     * Returns the *real world* unix timestamp of the last time the file at the specified path was modified. For directories this is usually the time of their creation.
    */
    export function lastModified(path: string): number

    /**
     * Returns an iterator over all elements in the directory at the specified path. Returns `nil` and an error messages if the path is invalid or some other error occurred.Note that directories usually are postfixed with a slash, to allow identifying them without an additional call to `fs.isDirectory`.
    */
    export function list(path: string): LuaIterable<string>

    /**
     * Creates a new directory at the specified path. Creates any parent directories that do not exist yet, if necessary. Returns `true` on success, `nil` and an error message otherwise.
    */
    export function makeDirectory(path: string): boolean | LuaMultiReturn<[null, string]>

    /**
     * Deletes a file or folder. If the path specifies a folder, deletes all files and subdirectories in the folder, recursively. Return `true` on success, `nil` and an error message otherwise.
    */
    export function remove(path: string): boolean | LuaMultiReturn<[null, string]>

    /**
     * Renames a file or folder. If the paths point to different file system components this will only work for files, because it actually perform a copy operation, followed by a deletion if the copy succeeds.Returns `true` on success, `nil` and an error message otherwise.
    */
    export function rename(oldPath: string, newPath: string): boolean | LuaMultiReturn<[false, string]>

    /**
     * Copies a file to the specified location. The target path has to contain the target file name. Does not support folders.
    */
    export function copy(fromPath: string, toPath: string): boolean | LuaMultiReturn<[false, string]>

    /**
     * Opens a file at the specified path for reading or writing. If mode is not specified it defaults to “r”. Possible modes are: `r`, `rb`, `w`, `wb`, `a` and `ab`.Returns a file stream (see below) on success, `nil` and an error message otherwise.Note that you can only open a limited number of files per file system at the same time. Files will be automatically closed when the garbage collection kicks in, but it is generally a good idea to call `close` on the file stream when done with the file.- *Important**: it is generally recommended to use `io.open` instead of this function, to get a buffered wrapper for the file stream.When opening files directly via the file system API you will get a file stream, a table with four functions. These functions are thin wrappers to the file system proxy's callbacks, which also means that read/write operations are *not* buffered, and can therefore be slow when reading few bytes often. You'll usually want to use `io.open` instead.
    */
    export function open(path: string, mode?: string): File | LuaMultiReturn<[null, string]>

    interface File {
        /**
         * Closes the file stream, releasing the handle on the underlying file system.
         */
        close(): void

        /**
         * Tries to read the specified number of bytes from the file stream. Returns the read string, which may be shorter than the specified number. Returns `nil` when the end of the stream was reached. Returns `nil` and an error message if some error occurred.
        */
        read(n: number): string | LuaMultiReturn<[null, string]>
        
        /**
         * Jumps to the specified position in the file stream, if possible. Only supported by file streams opened in read mode. The first parameter determines the relative location to seek from and can be `cur` for the current position, `set` for the beginning of the stream and `end` for the end of the stream. The second parameter is the offset by which to modify the position. Returns the new position or `nil` and an error message if some error occurred.The default value for the second parameter is 0, so `f:seek("set")` will reset the position to the start of the file
         */
        seek(whence: string, offset: number): number | LuaMultiReturn<[null, string]>
        
        /**
         * Writes the specified data to the stream. Returns `true` on success, `null` and an error message otherwise.
         */
        write(str: any): boolean | LuaMultiReturn<[null, string]>
    }
    
}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:uuid
 */
declare module "uuid" {
    
    /**
     * Returns 128 bit random identifiers, represented as a hex value in a string grouped by 8, 4, 4, 4, and 12 hex characters, separated by dashes.
     * e.g. `34eb7b28-14d3-4767-b326-dd1609ba92e`. You might recognize this pattern as it is the same used for component addressing.
     */
    export function next(): UUID
}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:internet
 */
declare module "internet" {
    /**
     * Sends an HTTP request to the specified URL, with the specified POST data, if any. If no data is specified, a GET request will be made. The POST data can be in one of two formats: if it's a string, it will be sent as-is. If it's a table, it will be converted to a string by assuming that each key is the name of a POST variable, and it's associated value is the value for that variable. 
     * Some examples: `internet.request(url, {some = "variable", another = 1})`Will send `some=variable&another=1`.The returned function is an iterator over chunks of the result, use it like so:`for chunk in internet.request(...) do stuff() end`Note that **this method ALSO support HTTPS**. So simply use `internet.request("https://example.com")` to send a request through HTTPS.Example specifying PUT: `internet.request("https://example.com", "put data", {}, "PUT")`.
     * @param method can be explicitly specified to values such as GET, POST, or PUT.
    */
    export function request(url: string, data?: string | object, headers?: any, method?: string): LuaIterable<string>

    /**
     * Opens a TCP socket using an internet component's `connect` method and wraps it in a table that provides the same methods as a file opened using `filesystem.open`: `read`, `write` and `close` (and `seek`, which will always fail). It is recommended to use `internet.open` instead, which will wrap the opened socket in a [buffer](https://ocdoc.cil.li/api:buffer), the same way `io.open` wraps files.The read method on the returned socket is *non-blocking*. Read will instantly return, but may return an empty string if there is nothing to read. Write *may* block until all data has been successfully written. It'll *usually* return immediately, though.
    */
    export function socket(address:string, port?: number): OpenOsBuffer

    /**
     * Opens a buffered socket stream to the specified address. The stream can be read from and written from, using `s:read` and `s:write` - in general it can be treated much like files opened using `io.open`. It may often be desirable to set the buffer's read timeout using `s:setTimeout(seconds)`, to avoid it blocking indefinitely. The read method on the returned buffer is *blocking*. Read will wait until some data is available to be read and return that.
    */
    export function open(address:string, port?: number): OpenOsBuffer

}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:thread
 */
declare module "thread" {
    export function create(thread_proc: () => any): ThreadHandle
    export function waitForAll(threads: ThreadHandle, timeout?: number): InternalError
    export function waitForAny(threads: ThreadHandle, timeout?: number): InternalError
    export function current(): ThreadHandle

    interface ThreadHandle {
        /**
         * Resumes (or thaws) a suspended thread. Returns success and an error message on failure. A thread begins its life already in a running state and thus basic thread workflows will not ever need to call `t:resume()`. A “running” thread will autonomously continue until it completes. `t:resume()` is only necessary to resume a thread that has been suspended(`t:suspend()`). **Note** that because you are not directly resuming the thread any exceptions thrown from the thread are absorbed by the threading library and not exposed to your process.
         * - At this time there is no way to hook in an exception handler for threads but for now `event.onError` is used to print the error message to “/tmp/event.log”. Please note that currently the hard interrupt exception is only thrown once, and the behavior of a process with threads when a hard interrupt is thrown is unspecified. At this time, any one of the threads or the parent process may take the exception. These details are not part of the specification for threads and any part of this implementation detail may change later.
         */
        resume(this: any): InternalError;
        /**
         * Suspends (or freezes) a running thread. Returns success and an error message on failure. A “suspended” thread never autonomously wakes up and dies as soon as its parent process (if attached) closes. A suspended thread ignores events. That means any event listeners or timers created inside the thread will not respond to event notifications. Note that threads do not buffer event signals and a suspended thread may miss event signals it was waiting for. For example, if a thread was last waiting on `event.pull("modem_message")` and is “suspended” and a “modem_message” is received by the computer then the thread will miss the event and never know it happened. Please note that if you suspend a thread that is blocked waiting for an event, it is unspecified which event the thread will receive when it is next resumed.
         * Suspending the current thread causes the thread to immediately yield and does not resume until `t:resume()` is called explicitly elsewhere.
         */
        suspend(this: any): InternalError;

        /**
         * Stabby stab! Kills the thread dead. The thread is terminated and will not continue its thread function. Any event registrations it made will die with it. Keep in mind that the core underlying Lua type is a coroutine which is not a preemptive thread. Thus, the thread's stopping points are deterministic, meaning that you can predict exactly where the thread will stop
         */
        kill(this: any): void

        /**
         * Returns the thread status as a string.
         * 
         * - **“running”**
         *     A running thread will continue (autonomously reactivating) after yields and blocking calls until its thread function exits. This is the default and initial state of a created thread. A thread remains in the “running” state even when blocked or not active. A running thread can be suspended(`t:suspend()`) or killed (`t:kill()`) but not resumed(`t:resume()`). A running thread will block calls to `t:join()` and block its parent from closing. Unlike a coroutine which appears “suspended” when not executing in this very moment, a thread state remains “running” even when waiting for an event.
         * 
         * - **“suspended”**
         *     A suspended thread will remain suspended and never self resume execution of its thread function. A suspended thread is automatically killed when its attached parent closes or when you attempt to `t:join()` it. A suspended thread ignores event signals, and any event registrations made from the context of the thread, or any child threads created therein, also ignore any event signals. A suspended thread's children behave as if suspended even if their status is “running”. A suspended thread can be resumed(`t:resume()`) or killed (`t:kill()`) but not suspended(`t:suspend()`).
         * 
         * - **“dead”**
         *     A dead thread has completed or aborted its execution or has been terminated. It cannot be resumed(`t:resume()`) nor suspended(`t:suspend()`). A dead thread does not block a parent process from closing. Killing a dead thread is not an error but does nothing.
         */
        status(this: any): "running" | "suspended" | "dead"

        /**
         * Attaches a thread to a process, conventionally known as a child thread or attached thread. `level` is an optional used to get parent processes, 0 | null uses the currently running process. When initially created a thread is already attached to the current process. This method returns nil and an error message if `level` refers to a nonexistent process, otherwise it returns truthy. An attached thread blocks its parent process from closing until the thread dies (or is killed, or the parent process aborts).
         */
        attach(this: any, level?: number): LuaMultiReturn<[boolean, string?]>

        /**
         * Detaches a thread from its parent if it has one. Returns nil and an error message if no action was taken, otherwise returns self (handy if you want to create and detach a thread in one line). A detached thread will continue to run until the computer is shutdown or rebooted, or the thread dies.
         */
        detach(this: any, ): LuaMultiReturn<[ThreadHandle | null, string?]>

        /**
         * Blocks the caller until `t` is no longer running or (optionally) returns false if `timeout` seconds is reached. After a call to `t:join()` the thread state is “dead”. Any of the following circumstances allow `join` to finish and unblock the caller
         * 
         * - The thread continues running until it returns from its thread function
         * 
         * - The thread aborts, or throws an uncaught exception
         * 
         * - The thread is suspended
         * 
         * - The thread is killed
         * 
         * Calling `thread.waitForAll({t})` is functionally equivalent to calling `t:join()`. When a processs is closing it will call `thread.waitForAll` on the group of its child threads if it has any. A child thread blocks its parent thread by the same machanism.
         */
        join(this: any, timeout?: number): LuaMultiReturn<[boolean, string?]>
    }
}

/**
 * The available string names, their respective MIDI code and their frequency are shown here:
 * 
 * |Name|MIDI code|Frequency|
 * | ----- | ----- | ----- |
 * |A0|21|27.5000|
 * |A#0/Bb0|22|29.1352|
 * |B0|23|30.8677|
 * |C1|24|32.7032|
 * |C#1/Db1|25|34.6478|
 * |D1|26|36.7081|
 * |D#1/Eb1|27|38.8909|
 * |E1|28|41.2034|
 * |F1|29|43.6535|
 * |F#1/Gb1|30|46.2493|
 * |G1|31|48.9994|
 * |G#1/Ab1|32|51.9131|
 * |A1|33|55.0000|
 * |A#1/Bb1|34|58.2705|
 * |B1|35|61.7354|
 * |C2|36|65.4064|
 * |C#2/Db2|37|69.2957|
 * |D2|38|73.4162|
 * |D#2/Eb2|39|77.7817|
 * |E2|40|82.4069|
 * |F2|41|87.3071|
 * |F#2/Gb2|42|92.4986|
 * |G2|43|97.9989|
 * |G#2/Ab2|44|103.826|
 * |A2|45|110.000|
 * |A#2/Bb2|46|116.541|
 * |B2|47|123.471|
 * |C3|48|130.813|
 * |C#3/Db3|49|138.591|
 * |D3|50|146.832|
 * |D#3/Eb3|51|155.563|
 * |E3|52|164.814|
 * |F3|53|174.614|
 * |F#3/Gb3|54|184.997|
 * |G3|55|195.998|
 * |G#3/Ab3|56|207.652|
 * |A3|57|220.000|
 * |A#3/Bb3|58|233.082|
 * |B3|59|246.942|
 * |C4|60|261.626|
 * |C#4/Db4|61|277.183|
 * |D4|62|293.665|
 * |D#4/Eb4|63|311.127|
 * |E4|64|329.628|
 * |F4|65|349.228|
 * |F#4/Gb4|66|369.994|
 * |G4|67|391.995|
 * |G#4/Ab4|68|415.305|
 * |A4|69|440.000|
 * |A#4/Bb4|70|466.164|
 * |B4|71|493.883|
 * |C5|72|523.251|
 * |C#5/Db5|73|554.365|
 * |D5|74|587.330|
 * |D#5/Eb5|75|622.254|
 * |E5|76|659.255|
 * |F5|77|698.456|
 * |F#5/Gb5|78|739.989|
 * |G5|79|783.991|
 * |G#5/Ab5|80|830.609|
 * |A5|81|880.000|
 * |A#5/Bb5|82|932.328|
 * |B5|83|987.767|
 * |C6|84|1046.50|
 * |C#6/Db6|85|1108.73|
 * |D6|86|1174.66|
 * |D#6/Eb6|87|1244.51|
 * |E6|88|1318.51|
 * |F6|89|1396.91|
 * |F#6/Gb6|90|1479.98|
 * |G6|91|1567.98|
 * |G#6/Ab6|92|1661.22|
 * |A6|93|1760.00|
 * |A#6/Bb6|94|1864.66|
 * |B6|95|1975.53|
 * @noSelf
 * @see https://ocdoc.cil.li/api:note
 */
declare module "note" {
    /**
     * Converts a note in string form (e.g. A#4 or Gb3, see below) or a given frequency into the respective MIDI code
    */
    export function midi(n: string | number | "A0" | 21 | "A#0" | "Bb0" | 22 | "B0" | 23 | "C1" | 24 | "C#1" | "Db1" | 25 | "D1" | 26 | "D#1" | "Eb1" | 27 | "E1" | 28 | "F1" | 29 | "F#1" | "Gb1" | 30 | "G1" | 31 | "G#1" | "Ab1" | 32 | "A1" | 33 | "A#1" | "Bb1" | 34 | "B1" | 35 | "C2" | 36 | "C#2" | "Db2" | 37 | "D2" | 38 | "D#2" | "Eb2" | 39 | "E2" | 40 | "F2" | 41 | "F#2" | "Gb2" | 42 | "G2" | 43 | "G#2" | "Ab2" | 44 | "A2" | 45 | "A#2" | "Bb2" | 46 | "B2" | 47 | "C3" | 48 | "C#3" | "Db3" | 49 | "D3" | 50 | "D#3" | "Eb3" | 51 | "E3" | 52 | "F3" | 53 | "F#3" | "Gb3" | 54 | "G3" | 55 | "G#3" | "Ab3" | 56 | "A3" | 57 | "A#3" | "Bb3" | 58 | "B3" | 59 | "C4" | 60 | "C#4" | "Db4" | 61 | "D4" | 62 | "D#4" | "Eb4" | 63 | "E4" | 64 | "F4" | 65 | "F#4" | "Gb4" | 66 | "G4" | 67 | "G#4" | "Ab4" | 68 | "A4" | 69 | "A#4" | "Bb4" | 70 | "B4" | 71 | "C5" | 72 | "C#5" | "Db5" | 73 | "D5" | 74 | "D#5" | "Eb5" | 75 | "E5" | 76 | "F5" | 77 | "F#5" | "Gb5" | 78 | "G5" | 79 | "G#5" | "Ab5" | 80 | "A5" | 81 | "A#5" | "Bb5" | 82 | "B5" | 83 | "C6" | 84 | "C#6" | "Db6" | 85 | "D6" | 86 | "D#6" | "Eb6" | 87 | "E6" | 88 | "F6" | 89 | "F#6" | "Gb6" | 90 | "G6" | 91 | "G#6" | "Ab6" | 92 | "A6" | 93 | "A#6" | "Bb6" | 94 | "B6" | 95 ): number

    /**
     * Converts a note in string form (e.g. A#4) or a given MIDI code into the respective frequency
    */
    export function freq(n: string | number | "A0" | 21 | "A#0" | "Bb0" | 22 | "B0" | 23 | "C1" | 24 | "C#1" | "Db1" | 25 | "D1" | 26 | "D#1" | "Eb1" | 27 | "E1" | 28 | "F1" | 29 | "F#1" | "Gb1" | 30 | "G1" | 31 | "G#1" | "Ab1" | 32 | "A1" | 33 | "A#1" | "Bb1" | 34 | "B1" | 35 | "C2" | 36 | "C#2" | "Db2" | 37 | "D2" | 38 | "D#2" | "Eb2" | 39 | "E2" | 40 | "F2" | 41 | "F#2" | "Gb2" | 42 | "G2" | 43 | "G#2" | "Ab2" | 44 | "A2" | 45 | "A#2" | "Bb2" | 46 | "B2" | 47 | "C3" | 48 | "C#3" | "Db3" | 49 | "D3" | 50 | "D#3" | "Eb3" | 51 | "E3" | 52 | "F3" | 53 | "F#3" | "Gb3" | 54 | "G3" | 55 | "G#3" | "Ab3" | 56 | "A3" | 57 | "A#3" | "Bb3" | 58 | "B3" | 59 | "C4" | 60 | "C#4" | "Db4" | 61 | "D4" | 62 | "D#4" | "Eb4" | 63 | "E4" | 64 | "F4" | 65 | "F#4" | "Gb4" | 66 | "G4" | 67 | "G#4" | "Ab4" | 68 | "A4" | 69 | "A#4" | "Bb4" | 70 | "B4" | 71 | "C5" | 72 | "C#5" | "Db5" | 73 | "D5" | 74 | "D#5" | "Eb5" | 75 | "E5" | 76 | "F5" | 77 | "F#5" | "Gb5" | 78 | "G5" | 79 | "G#5" | "Ab5" | 80 | "A5" | 81 | "A#5" | "Bb5" | 82 | "B5" | 83 | "C6" | 84 | "C#6" | "Db6" | 85 | "D6" | 86 | "D#6" | "Eb6" | 87 | "E6" | 88 | "F6" | 89 | "F#6" | "Gb6" | 90 | "G6" | 91 | "G#6" | "Ab6" | 92 | "A6" | 93 | "A#6" | "Bb6" | 94 | "B6" | 95 ): number

    /**
     * Converts a MIDI value back into a string; if you have a frequency to convert, just use `note.name(note.midi(frequency))`
    */
    export function name(n: number): string

    /**
     * Converts note block ticks (0-24) into MIDI code (34-58, respectively) and vice-versa. Useful for use with Note Blocks and OpenComponents
    */
    export function ticks(n: number): number

    /**
     * Plays a note from a string or MIDI code via computer.beep with the specified duration
    */
    export function play(tone: "A0" | 21 | "A#0" | "Bb0" | 22 | "B0" | 23 | "C1" | 24 | "C#1" | "Db1" | 25 | "D1" | 26 | "D#1" | "Eb1" | 27 | "E1" | 28 | "F1" | 29 | "F#1" | "Gb1" | 30 | "G1" | 31 | "G#1" | "Ab1" | 32 | "A1" | 33 | "A#1" | "Bb1" | 34 | "B1" | 35 | "C2" | 36 | "C#2" | "Db2" | 37 | "D2" | 38 | "D#2" | "Eb2" | 39 | "E2" | 40 | "F2" | 41 | "F#2" | "Gb2" | 42 | "G2" | 43 | "G#2" | "Ab2" | 44 | "A2" | 45 | "A#2" | "Bb2" | 46 | "B2" | 47 | "C3" | 48 | "C#3" | "Db3" | 49 | "D3" | 50 | "D#3" | "Eb3" | 51 | "E3" | 52 | "F3" | 53 | "F#3" | "Gb3" | 54 | "G3" | 55 | "G#3" | "Ab3" | 56 | "A3" | 57 | "A#3" | "Bb3" | 58 | "B3" | 59 | "C4" | 60 | "C#4" | "Db4" | 61 | "D4" | 62 | "D#4" | "Eb4" | 63 | "E4" | 64 | "F4" | 65 | "F#4" | "Gb4" | 66 | "G4" | 67 | "G#4" | "Ab4" | 68 | "A4" | 69 | "A#4" | "Bb4" | 70 | "B4" | 71 | "C5" | 72 | "C#5" | "Db5" | 73 | "D5" | 74 | "D#5" | "Eb5" | 75 | "E5" | 76 | "F5" | 77 | "F#5" | "Gb5" | 78 | "G5" | 79 | "G#5" | "Ab5" | 80 | "A5" | 81 | "A#5" | "Bb5" | 82 | "B5" | 83 | "C6" | 84 | "C#6" | "Db6" | 85 | "D6" | 86 | "D#6" | "Eb6" | 87 | "E6" | 88 | "F6" | 89 | "F#6" | "Gb6" | 90 | "G6" | 91 | "G#6" | "Ab6" | 92 | "A6" | 93 | "A#6" | "Bb6" | 94 | "B6" | 95 | number | string,duration: number): void


}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:computer
 */
declare module "computer" {
    /**
     * The [component address](https://ocdoc.cil.li/component:component_access) of this computer.
    */
    export function address(): string

    /**
     * The component address of the computer's temporary file system (if any), used for mounting it on startup.
     */
    export function tmpAddress(): string

    /**
     * The amount of memory currently unused, in bytes. If this gets close to zero your computer will probably soon crash with an out of memory error. Note that for OpenOS, it is highly recommended to at least have 1x tier 1.5 RAM stick or more. The os will boot on a single tier 1 ram stick, but quickly and easily run out of memory.
     */
    export function freeMemory(): number

    /**
     * The total amount of memory installed in this computer, in bytes.
     */
    export function totalMemory(): number

    /**
     * The amount of energy currently available in the network the computer is in. For a robot this is the robot's own energy / fuel level.
     */
    export function energy(): number

    /**
     * The maximum amount of energy that can be stored in the network the computer is in. For a robot this is the size of the robot's internal buffer (what you see in the robot's GUI).
     */
    export function maxEnergy(): number

    /**
     * The time in real world seconds this computer has been running, measured based on the world time that passed since it was started - meaning this will not increase while the game is paused, for example.
     */
    export function uptime(): number

    /**
     * Shuts down the computer. Optionally reboots the computer, if `reboot` is true, i.e. shuts down, then starts it again automatically. This function never returns. This example will reboot the computer if it has been running for at least 300 seconds(5 minutes)
     */
    export function shutdown(robot?: boolean): void

    /**
     * Get the address of the filesystem component from which to try to boot first. *New since OC 1.3*.
     */
    export function getBootAddress(): string

    /**
     * Set the address of the filesystem component from which to try to boot first. Call with nil / no arguments to clear. *New since OC 1.3*.
     */
    export function setBootAddress(address?: string): void

    /**
     * Returns the current [runlevel](https://en.wikipedia.org/wiki/Runlevel) the computer is in. Current Runlevels in OpenOS are:- `S`: Single-User mode, no components or filesystems initialized yet- `1`: Single-User mode, filesystems and components initialized - OpenOS finished booting
     */
    export function runlevel(): string | number

    /**
     * A list of all users registered on this computer, as a tuple. To iterate the result as a list, use `table.pack` on it, first. Please see [the user rights documentation](https://ocdoc.cil.li/computer_users).
     */
    export function users(): LuaMultiReturn<string[]>

    /**
     * Registers a new user with this computer. Returns `true` if the user was successfully added. Returns `nil` and an error message otherwise.The user must be currently in the game. The user will gain full access rights on the computer. In the shell, `useradd USER` is a command line option to invoke this method.
     */
    export function addUser(name: string): boolean | LuaMultiReturn<[null, string]>

    /**
     * Unregisters a user from this computer. Returns `true` if the user was removed, `false` if they weren't registered in the first place.The user will lose all access to this computer. When the last user is removed from the user list, the computer becomes accessible to all players. `userdel USER` is a command line option to invoke this method.
     */
    export function removeUser(name: string): boolean

    /**
     * Pushes a new signal into the queue. Signals are processed in a FIFO order. The signal has to at least have a name. Arguments to pass along with it are optional. Note that the types supported as signal parameters are limited to the basic types nil, boolean, number, string, and tables. Yes tables are supported (keep reading). Threads and functions are not supported.Note that only tables of the supported types are supported. That is, tables must compose types supported, such as other strings and numbers, or even sub tables. But not of functions or threads.
     */
    export function pushSignal(name: string): void

    /**
     * Tries to pull a signal from the queue, waiting up to the specified amount of time before failing and returning `nil`. If no timeout is specified waits forever.The first returned result is the signal name, following results correspond to what was pushed in `pushSignal`, for example. These vary based on the event type. Generally it is more convenient to use `event.pull` from the [event](https://ocdoc.cil.li/api:event) library. The return value is the very same, but the `event` library provides some more options.
     */
    export function pullSignal(timeout?: number): LuaMultiReturn<string[]>

    /**
     * if `frequency` is a number it value must be between 20 and 2000.Causes the computer to produce a beep sound at `frequency` Hz for `duration` seconds. This method is overloaded taking a single string parameter as a pattern of dots `.` and dashes `-` for short and long beeps respectively.
     */
    export function beep(frequency?: string | number, duration?: number): void

    /**
     * Returns a table of information about installed devices in the computer.
     */
    export function getDeviceInfo(): LuaPairsIterable<string, LuaPairsIterable<string, any>>
     
     
}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:event
 * @untested This part of code is untested (Since I don't know how to do event system)
 * @deprecated Deprecated. Using lua for this kind of stuff is recommended (This requires dynamic type)
 */
declare module "event" {
    /**
     * Register a new event listener that should be called for events with the specified name.
     * @param event name of the signal to listen to.
     * @param callback the function to call if this signal is received. The function will receive the event name it was registered for as first parameter, then all remaining parameters as defined by the [signal](https://ocdoc.cil.li/component:signals) that caused the event.
     * @return `number`, the event id which can be canceled via `event.cancel`, if the event was successfully registered, `false` if this function was already registered for this event type.
    */
    export function listen(event: string, callback: (eventId: string, ...parameters: any[]) => void): number | false

    /**
     * Unregister a previously registered event listener.
     * @param event name of the signal to unregister.
     * @param callback the function that was used to register for this event.
     * @return `true` if the event was successfully unregistered, `false` if this function was not registered for this event type.*Note:* An event listeners may return `false` to unregister themselves, which is equivalent to calling `event.ignore` and passing the listener with the event name it was registered for.
    */
    export function ignore(event: string, callback: (eventId: string, ...parameters: any[]) => void): boolean

    /**
     * Starts a new timer that will be called after the time specified in `interval`.
     * @param interval time in seconds between each invocation of the callback function. Can be a fraction like 0.05.
     * @param callback the function to call.
     * @param times - how many times the function will be called. If omitted the function will be called once. Pass `math.huge` for infinite repeat.
     * @return a timer ID that can be used to cancel the timer at any time.
     * @apiNote the timer resolution can vary. If the computer is idle and enters sleep mode, it will only be woken in a game tick, so the time the callback is called may be up to 0.05 seconds off.
     * 
    */
    export function timer(interval: number, callback: () => void, times?: number): number

    /**
     * Cancels a timer previously created with `event.timer`.
     * @param timerId a timer ID as returned by `event.timer`.
     * @return `true` if the timer was stopped, `false` if there was no timer with the specified ID.
    */
    export function cancel(timerId: number): boolean

    /**
     * Pulls and returns the next available event from the queue, or waits until one becomes available.
     * @param timeout if passed the function will wait for a new event for this many seconds at maximum then returns `nil` if no event was queued during that time.
     * @param name an event pattern that will act as a filter. If given then only events that match this pattern will be returned. Can be `nil` in which case the event names will not be filtered. See `string.match` on how to use patterns.**…** - any number of parameters in the same order as defined by the [signal](https://ocdoc.cil.li/component:signals) that is expected. Those arguments will act as filters for the additional arguments returned by the signal. Direct equality is used to determine if the argument is equal to the given filter. Can be `nil` in which case this particular argument will not be filtered.Filter example:The `touch` signal (when a player clicks on a tier two or three screen) has the signature `screenX: number, screenY: number, playerName: string`To only pull clicks by player “Steve” you'd do:`local _, x, y = event.pull("touch", nil, nil, "Steve")`
    */
    export function pull(timeout?: number, name?: string, ...extra: any[]): LuaMultiReturn<[...any]>
    export function pull(name?: string, ...extra: any[]): LuaMultiReturn<[...any]>

    /**
     * (Since 1.5.9) Pulls and returns the next available event from the queue, or waits until one becomes available but allows filtering by specifying filter function. 
     * @param timeout if passed the function will wait for a new event for this many seconds at maximum then returns `nil` if no event was queued during that time
     * @param filter if passed the function will use it as a filtering function of events. Allows for advanced filtering.
    */
    export function pullFiltered(timeout?: number, filter?: (name: string, ...extra: any[]) => boolean): LuaMultiReturn<[string, ...any]>

    /**
     * (Since 1.5.9) As its arguments `pullMultiple` accepts multiple event names to be pulled, allowing basic filtering of multiple events at once
    */
    export function pullMultiple(...param: any): LuaMultiReturn<[...any]>

    /**
     * Global event callback error handler. If an event listener throws an error, we handle it in this function to avoid it bubbling into unrelated code (that only triggered the execution by calling `event.pull`). Per default, this logs errors into a file on the temporary file system.You can replace this function with your own if you want to handle event errors in a different way.
    */
    export function onError(message: any): void

    /**
     * This is only an alias to [computer.pushSignal](https://ocdoc.cil.li/api:computer). This does not modify the arguments in any way. It seemed logical to add the alias to the event library because there is also an `event.pull` for signals.
    */
    export function push(name: string, ...param: any[]): void

}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:robot
 */
declare module "robot" {
    /**
     * Returns the robot's name.The name of a Robot is set initially during it's creation and cannot be changed programmatically. However you can change it using an anvil if you want.
    */
    export function name(): string

    /**
     * Detects what is directly in front of the robot and returns if the robot could move through it as well as a generic description.
     * @return `true` if the robot if whatever is in front of the robot would prevent him from moving forward (a block or an entity) (Note: Drones return `true` even if the block is `passable`), `false` otherwise. The second parameter describes what is in front in general and is one of either `entity`, `solid`, `replaceable`, `liquid`, `passable` or `air`.
    */
    export function detect(): LuaMultiReturn<[boolean, "entity" | "solid" | "replaceable" | "liquid" | "passable" | "air"]>

    /**
     * As {@link robot.detect} except that it scans the block directly above the robot.
    */
    export function detectUp():  LuaMultiReturn<[boolean, "entity" | "solid" | "replaceable" | "liquid" | "passable" | "air"]>

    /**
     * As {@link robot.detect} except that it scans the block directly below the robot.
    */
    export function detectDown(): LuaMultiReturn<[boolean, "entity" | "solid" | "replaceable" | "liquid" | "passable" | "air"]>

    /**
     * Selects the given inventory slot (if specified) and returns the current inventory slot.
     * @param slot the slot to select. If this parameter is omitted, no slot is selected.
     * @return the currently selected slot. Either the one specified (if successfully selected) or the one that was previously selected.
    */
    export function select(slot?: number): number

    /**
     * 
     * @return the amount of select-able internal robot inventory slots. To get the number of inventory upgrade use: x = robot.inventorySize() / 16.
    */
    export function inventorySize(): number

    /**
     * Returns the amount of items currently in the specified or selected slot.
     * @param slot specifies the slot to count the items in. If omitted the currently selected slot is counted instead.
     * @return the amount of items in the slot specified or the currently selected slot if no slot was given.
    */
    export function count(slot: number): number

    /**
     * Returns the amount of items that can still be added to the specified slot until it is filled up.
     * @param slot specifies the slot to count the items in. If omitted the currently selected slot is counted instead.
     * @return the amount of items that can still be added to the the slot specified or the currently selected slot until it is considered full.This function helps to determine how many items of a type can be added to a specific slot. While for example cobblestone can pile up to 64 items per slot, empty buckets can only stack up to 16 and other blocks like doors can only take 1 item per slot.
    */
    export function space(slot: number): number

    /**
     * Moves all or up to *count* items from the currently selected slot to the specified slot.
     * @param slot specifies the slot move the items from the currently selected slot to.
     * @param count if specified only up to this many items are moved, otherwise the entire stack is moved.
     * @return `true` if exchanging the content between those slots was successful, `false` otherwise.If there are items in the target slot then this function attempts to swap the items in those slots. This only succeeds if you move all items away from the current slot or if the current slot was empty anyways.Note that this will always return true if the specified slot is the same as the currently selected slot, or if both slots are empty, even though no items are effectively moved.
    */
    export function transferTo(slot: number, count?: number): boolean

    /**
     * Compares the item of the currently selected slot to the item of the slot specified and returns whether they are equal or not.
     * @param slot specifies the slot to compare the current slot to.
     * @return `true` if the item type in the specified slot and the currently selected slot are equal, `false` otherwise.Two items are considered the 'same' if their item type and metadata are the same. Stack size or any additional mod-specific item informations (like for example the content of two floppy disks) are not checked.
    */
    export function compareTo(slot: number): boolean

    /**
     * Compares the block in front of the robot with the item in the currently selected slot and returns whether they are the same or not.Blocks are considered the 'same' if their type and metadata are the same. Stack size or any additional informations (like for example the inventory of a container) are not checked.Note that empty space in front of the robot is considered an 'air block' by the game, which cannot be put into an inventory slot and therefore compared by normal means. An empty slot and an air block are **not** the same. You can use `robot.detect()` beforehand to determine if there is actually a block in front of the robot.Also keep in mind that blocks that drop items need to be compared to the actual same block that is in the world. For example stone blocks drop as cobblestone and diamond ores drop diamond items, which are not the same for this function. Use silk-touch items to retrieve the actual block in the world for comparison.
    */
    export function compare(): boolean

    /**
     * As {@link compare} just for the block directly above the robot.
    */
    export function compareUp(): boolean

    /**
     * As {@link compare} just for the block directly below the robot.
    */
    export function compareDown(): boolean

    /**
     * Tries to drop items from the currently selected inventory slot in **front** of the robot. Note that if you are trying to drop items into an inventory below you, this is the wrong method. Use `dropDown` for that case. This method, `drop`, will drop the items to the **front**.
     * @param count specifies how many items to drop. If omitted or if count exceeds the amount of items in the currently selected slot, then all items in the currently selected slot are dropped.
     * @return `true` if at least one item was dropped, `false` otherwise.If the block or entity (like chests or mine-carts with a chest) immediately in front of the robot has an accessible item inventory, the robot will try to put those items into this inventory instead of throwing them into the world. If the block in front has an inventory but the item could not be moved into it for any reason, then this function returns false and does not move any items. Where the item will be put on depends on the inventory and the side the robot is facing. Furnaces for example receive items to smelt from the top side. Also note that robots are considered “blocks with an inventory” as well and therefore items can be moved into robot slots as with any other inventory as well.This function cannot interact with non-item inventories (like for example fluid tanks) and will not consider them an inventory and therefore items will be thrown into the world instead. You need to use the `robot.use` function to interact with those types of blocks.Note that this will always return false, if the currently selected slot contains no items at all.
    */
    export function drop(count?: number): boolean

    /**
     * As {@link drop} just for the block directly above the robot.
    */
    export function dropUp(): boolean

    /**
     * As {@link drop} just for the block directly below the robot.
    */
    export function dropDown(): boolean

    /**
     * Tries to pick up items from directly in front of the robot and puts it into the selected slot or (if occupied) first possible slot.
     * @param count limits the amount of items to pick up by this many. If omitted a maximum of one stack is taken.
     * @return `true` if at least one item was picked up, false otherwise.This is basically the inverse of `robot.drop` and will interact with item inventories in the same way. However this will only take the first item available in that inventory. For more precise inventory management you need to install an [inventory controller upgrade](https://ocdoc.cil.li/item:inventory_controller_upgrade) into the robot.If there are multiple items in front of the robot, this will pick them up based on the distance to the robot. This will skip items that cannot be picked up for whatever reason and try other items first before returning `false`.If the currently selected slot contains a different item than the one the robot tries to pick up, the robot will attempt to place the item in the next possible slots *after* the selected one that are either free or contain identical items with less than the maximum stack size for those items. This will distribute the items to pick up over several slots if necessary. If no slot after the selected one is able to contain the items the robot tries to put up, this function will fail, even if there are slots *before* the currently selected slot that could hold those items.
    */
    export function suck(count?: number): boolean

    /**
     * As {@link robot.suck} except that it tries to pick up items from directly above the robot.
    */
    export function suckUp(count?: number): boolean

    /**
     * As {@link robot.suck} except that it tries to pick up items from directly below the robot.
    */
    export function suckDown(count?: number): boolean

    /**
     * Tries to place the block in the currently selected inventory slot in front of the robot.
     * @param side if specified this determines the surface on which the robot attempts to place the block for example to place torches to a specific side. If omitted the robot will try all possible sides. See the [Sides API](https://ocdoc.cil.li/api:sides) for a list of possible sides.
     * @param sneaky if set to `true` the robot will simulate a sneak-placement (like if the player would be using shift during placement), which is usually not necessary and only included for compatibility to other mods.
     * @return `true` if an item could be placed, `false` otherwise. If placement failed, the secondary return parameter will describe why the placement failed.A robot can only place blocks to the side of another solid block, they cannot place blocks “into the air” without an [Angel upgrade](https://ocdoc.cil.li/item:angel_upgrade). This can be changed in the config file.Note that trying to place an empty inventory slot will always fail.
    */
    export function place(side?: number, sneaky?: boolean): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link robot.place}` except that the robot tries to place the item into the space directly above it.
    */
    export function placeUp(side?: number, sneaky?: boolean): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link robot.place} except that the robot tries to place the item into the space directly below it.
    */
    export function placeDown(side?: number, sneaky?: boolean): LuaMultiReturn<[boolean, string?]>

    /**
     * Returns the durability of the item currently in the tool slot, followed by its current durability, followed by its maximum durability.If no item is equipped or the item has no durability this returns `nil` and an error message describing why no durability could be returned. The error message is one of `no tool equipped` or `tool cannot be damaged`.
    */
    export function durability(): LuaMultiReturn<[number, number, number]> | LuaMultiReturn<[null, string]>

    /**
     * Makes the robot use the item currently in the tool slot against the block or space immediately in front of the robot in the same way as if a player would make a left-click.
     * @param side if given the robot will try to 'left-click' only on the surface as specified by side, otherwise the robot will try all possible sides. See the [Sides API](https://ocdoc.cil.li/api:sides) for a list of possible sides.
     * @return true if the robot could interact with the block or entity in front of it, false otherwise. If successful the secondary parameter describes what the robot interacted with and will be one of 'entity', 'block' or 'fire'.This can be used to mine blocks or fight entities in the same way as if the player did a left-click. Note that tools and weapons do lose durability in the same way as if a player would use them and need to be replaced eventually. Items mined or dropped of mobs will be put into the inventory if possible, otherwise they will be dropped to the ground.Note that even though the action is performed immediately (like a block being destroyed) this function will wait for a while appropriate to the action performed to simulate the time it would take a player to do the same action. This is most noticeable if you try to mine obsidian blocks: they are destroyed and put into the inventory immediately, but the function will wait for a few seconds.If this is used to mine blocks, then the tool equipped needs to be sufficient to actually mine the block in front. If for example a wooden pick-axe is used on an obsidian block this will return false. Everything (including an empty slot) can be used to fight mobs, but the damage will be based on the item used. Equally everything can be used to extinguish fire, and items with durability will not lose any if done so.
    */
    export function swing(side?: number, sneaky?:boolean): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link swing} except that the block or entity directly above the robot will be the target.
    */
    export function swingUp(side?:  number, sneaky?: boolean): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link swing} except that the block or entity directly below the robot will be the target.
    */
    export function swingDown(side?:  number, sneaky?: boolean): LuaMultiReturn<[boolean, string?]>

    /**
     * Attempts to use the item currently equipped in the tool slot in the same way as if the player would make a right-click.
     * @param side if given the robot will try to 'right-click' only on the surface as specified by side, otherwise the robot will try all possible sides. See the [Sides API](https://ocdoc.cil.li/api:sides) for a list of possible sides.
     * @param sneaky if set to `true` the robot will simulate a sneak-right-click (like if the player would be using shift during a right-click). Some items (like buckets) will behave differently if this is set to true.
     * @param duration how long the item is used. This is useful when using charging items like a bow.
     * @return true if the robot could interact with the block or entity in front of it, false otherwise. If successful the secondary parameter describes what the robot interacted with and will be one of 'block*activated', 'item*placed', 'item*interacted' or 'item*used'.This function has a very broad use as the robot can simulate right-clicks with most items. The only difference to players is that the robot cannot use items that specifically require the user to be an entity as the robot is a block. So drinking potions, eating food or throwing an ender pearl will fail.This functions secondary return value can be used to determine what the result of the right-click caused. Which of the item results is returned is not always obvious and requires some testing beforehand. Also note that while robots are not affected by harmful potions they can be destroyed by explosions, so be careful when you place, throw or activate any form of explosives with this function. Possible values for the second return value:- `block_activated` - a block was activated (like levers, switches or doors).- `item_interacted` - the equipped tool interacted with the world, for example sheers when used on a sheep.- `item_placed` - something was placed into the world. This is not only caused by placeable blocks, but as well by items that cause blocks or entities to appear in the world (like flint and stone or mob eggs).- `item_used` - the equipped was activated, like a splash-potion.- `air` - the equipped item requires a target but there was none. Note that if your robot has an Angel upgrade, this will never be returned, however some actions might still cause no effect.
    */
    export function use(side?:  number, sneaky?:  boolean, duration?:  number): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link use} except that the item is used aiming at the area above the robot.
    */
    export function useUp(side?:  number, sneaky?:  boolean, duration?:  number): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link use} except that the item is used aiming at the area below the robot.
    */
    export function useDown(side?:  number, sneaky?:  boolean, duration?:  number): LuaMultiReturn<[boolean, string?]>

    /**
     * Tries to move the robot forward.
     * @return `true` if the robot successfully moved, `nil` otherwise. If movement fails a secondary result will be returned describing why it failed, which will either be 'impossible move', 'not enough energy' or the description of the obstacle As {@link detect} would return.The result 'not enough energy' is rarely returned as being low on energy usually causes the robot to shut down beforehand.The result 'impossible move' is kind of a fall-back result and will be returned for example if the robot tries to move into an area of the world that is currently not loaded.
    */
    export function forward(): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link forward()} except that the robot tries to move backward.
    */
    export function back(): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link forward()} except that the robot tries to move upwards.
    */
    export function up(): LuaMultiReturn<[boolean, string?]>

    /**
     * As {@link forward()} except that the robot tries to move downwards.
    */
    export function down(): LuaMultiReturn<[boolean, string?]>

    /**
     * Turns the robot 90° to the left.Note that this can only fail if the robot has not enough energy to perform the turn but has not yet shut down because of it.
    */
    export function turnLeft(): void
    /**
     * As {@link turnLeft} except that the robot turns 90° to the right.
    */
    export function turnRight(): void
    /**
     * This is the same as calling `robot.turnRight` twice.**Deprecated since OC 1.3** use `component.experience.level()` instead (only available if the [experience upgrade](https://ocdoc.cil.li/item:experience_upgrade) is installed).Returns the current level of the robot, with the fractional part being the percentual progress towards the next level. For example, if this returns `1.5`, then the robot is level one, and 50% towards achieving level two.
    */
    export function turnAround(): void
    /**
     * The number of tanks installed in the robot.
    */
    export function tankCount():number

    /**
     * Select the specified tank. This determines which tank most operations operate on.
    */
    export function selectTank(tank: any): void

    /**
     * The the current fluid level in the specified tank, or, if none is specified, the selected tank.
    */
    export function tankLevel(tank?: number):number

    /**
     * The the remaining fluid capacity in the specified tank, or, if none is specified, the selected tank.
    */
    export function tankSpace():number

    /**
     * Tests whether the fluid in the selected tank is the same as in the specified tank.
    */
    export function compareFluidTo(tank:number):boolean

    /**
     * Transfers the specified amount of fluid from the selected tank into the specified tank. If no volume is specified, tries to transfer 1000 mB.
    */
    export function transferFluidTo(tank:number, count?: number):boolean

    /**
     * Tests whether the fluid in the selected tank is the same as in the world or the tank in front of the robot.
    */
    export function compareFluid():boolean

    /**
     * Like `compareFluid`, but operates on the block above the robot.
    */
    export function compareFluidUp():boolean

    /**
     * Like `compareFluid`, but operates on the block below the robot.
    */
    export function compareFluidDown():boolean

    /**
     * Extracts the specified amount of fluid from the world or the tank in front of the robot. When no amount is specified, will try to drain 1000 mB. When the drained fluid is in the world and it cannot be fully stored in the selected tank, the operation fails, i.e. no fluid is lost.
    */
    export function drain(count?: number):boolean

    /**
     * Like `drain`, but operates on the block above the robot.
    */
    export function drainUp(count?: number):boolean

    /**
     * Like `drain`, but operates on the block below the robot.
    */
    export function drainDown(count?: number):boolean

    /**
     * Injects the specified amount of fluid from the selected tank into the the world or the tank in front of the robot. When no amount is specified, will try to eject 1000 mB. When there is not enough fluid to fill a block, or the target tank does not have enough room, the operation fails, i.e. no fluid is lost.
    */
    export function fill(count?: number):boolean

    /**
     * Like `fill`, but operates on the block above the robot.
    */
    export function fillUp(count?: number):boolean

    /**
     * Like `fill`, but operates on the block below the robot.
    */
    export function fillDown(count?: number):boolean


}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:process
 */
declare module "process" {
    /**
     * Loads a Lua script from the specified *absolute* `path` and sets it up as a process.It will be loaded with a custom environment, to avoid cluttering the callers/global environment. This environment will have access to anything in the specified environment, or the default (top level) environment if none is given.(since OpenOS 1.6) `path` can also be a function, in which case `env` must be `nil`.If an `init` function is specified, that method is called the first time the resulting coroutine is executed, and run before the actual program is started. This allows fine-tuning of the programs environment.If a `name` is specified, that is the name the process will specify in `process.running`. It will be `nil` otherwise.
    */
    export function load(path:string, env?:object, init?: () => void, name?:string): coroutine

    /**
     * Returns a table containing the command and path of the specified process, and some other data. The `level` can optionally be provided to get parent processes. It defaults to 1, the current program. 2 is the current program's parent (the one that called `process.load` to start the current program) and so on
    */
    export function info(level?: number): RunningProcess | null

    /**
     * (deprecated as of 1.5, use process.info instead) Returns the path to the currently running program (i.e. the last process created via `process.load`). The level can optionally be provided to get parent processes. It defaults to 1, the current program. 2 is the current program's parent (the one that called `process.load` to start the current program) and so on
     * The second returned value is the environment of the process, i.e. the table created for it to use as one.The third returned value is the 'name' of the process, i.e. the fourth parameter to `process.load`. For programs started via the shell this will ususally be the original command. E.g. for `ls -l`, the first returned value will be `ls`, while this value will be `ls -l`.
     * @deprecated
    */
    export function running(level?: number): LuaMultiReturn<[string, coroutine, string]>

    interface RunningProcess {
        data: object
        env: object
        command: string,
        path: string
    }

    /**
     * This library comprises the operations to manipulate coroutines, which come
     * inside the table coroutine.
     * 
     * @author TypeScriptToLua
     * @see https://github.com/TypeScriptToLua/lua-types/blob/master/core/coroutine.d.ts
     */
    interface coroutine {
        /**
         * Creates a new coroutine, with body f. f must be a function. Returns this
         * new coroutine, an object with type "thread".
         */
        create(f: (...args: any[]) => any): LuaThread;

        /**
         * Starts or continues the execution of coroutine co. The first time you
         * resume a coroutine, it starts running its body. The values val1, ... are
         * passed as the arguments to the body function. If the coroutine has yielded,
         * resume restarts it; the values val1, ... are passed as the results from the
         * yield.
         *
         * If the coroutine runs without any errors, resume returns true plus any
         * values passed to yield (when the coroutine yields) or any values returned
         * by the body function (when the coroutine terminates). If there is any
         * error, resume returns false plus the error message.
         */
        resume(
            co: LuaThread,
            ...val: any[]
        ): LuaMultiReturn<[true, ...any[]] | [false, string]>;

        /**
         * Returns the status of coroutine co, as a string: "running", if the
         * coroutine is running (that is, it called status); "suspended", if the
         * coroutine is suspended in a call to yield, or if it has not started running
         * yet; "normal" if the coroutine is active but not running (that is, it has
         * resumed another coroutine); and "dead" if the coroutine has finished its
         * body function, or if it has stopped with an error.
         */
        status(co: LuaThread): 'running' | 'suspended' | 'normal' | 'dead';

        /**
         * Creates a new coroutine, with body f. f must be a function. Returns a
         * function that resumes the coroutine each time it is called. Any arguments
         * passed to the function behave as the extra arguments to resume. Returns the
         * same values returned by resume, except the first boolean. In case of error,
         * propagates the error.
         */
        wrap(f: (...args: any[]) => any): (...args: any[]) => LuaMultiReturn<any[]>;

        /**
         * Suspends the execution of the calling coroutine. Any arguments to yield are
         * passed as extra results to resume.
         */
        yield(...args: any[]): LuaMultiReturn<any[]>;
    }

}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:serialization
 */
declare module "serialization" {
    /**
     * Generates a string from an object that can be parsed again using `serialization.unserialize`. The generated output is Lua code. Supports basic types (nil, boolean, number, string) and tables without cycles (will error out when cycles are detected, unless in `pretty` print mode). Properly handles NaN values and infinity.The `pretty` mode can be used to generate output for display to the user, this output will in most circumstances not be readable with `serialization.unserialize`.The value of pretty defines the number of entries that will be printed.If pretty is set to true it will by default print 10 entries.This function can be useful for sending messages via a network card.
    */
    export function serialize <T> (value: T & Exclude<T, Function>, pretty?:boolean): string

    /**
     * Restores an object previously saved with `serialization.serialize`.Contents
    */
    export function unserialize(value: string): any

}

/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:term
 */
declare module "term" {
    /**
     * Returns whether the term API is available for use, i.e. whether a primary GPU and screen are present. In other words, whether `term.read` and `term.write` will actually do something.
    */
    export function isAvailable(): boolean

    /**
     * (new in OpenOS 1.6)Gets the width, height, x offset, y offset, relative x, and relative y values.
    */
    export function getViewport(): LuaMultiReturn<[number, number, number, number, number, number]>

    /**
     * (new in OpenOS 1.6)Gets the gpu proxy used by the term api.
    */
    export function gpu(): ComponentGpu

    /**
     * (new in OpenOS 1.6)Acts exactly like `event.pull` taking the same parameters and returning the same results. This method is used to blink the cursor while waiting for an event result.
    */
    export function pull(timeout?: number, name?: string, ...extra: any[]): LuaMultiReturn<[string, ...any]>

    /**
     * Gets the current position of the cursor.
    */
    export function getCursor(): LuaMultiReturn<[number, number]>

    /**
     * Sets the cursor position to the specified coordinates.
    */
    export function setCursor(col: number, row: number): void

    /**
     * Gets whether the cursor blink is currently enabled, i.e whether the cursor alternates between the actual “pixel” displayed at the cursor position and a fully white block every half second.
    */
    export function getCursorBlink(): boolean

    /**
     * Sets whether cursor blink should be enabled or not.
    */
    export function setCursorBlink(enabled: boolean): void

    /**
     * Clears the complete screen and resets the cursor position to (1, 1).
    */
    export function clear(): void

    /**
     * Clears the line the cursor is currently on and resets the cursor's horizontal position to 1.
    */
    export function clearLine(): void

    /**
     * Read some text from the terminal, i.e. allow the user to input some text. For example, this is used by the shell and Lua interpreter to read user input. This will make the rest of the current line, starting at the current cursor position, an editable area. It allows input, deletion and navigating to the left and right via the arrow keys and home/end keys.
     * - **since OpenOS 1.6** the parameter list as specified here is considered deprecated. The first parameter is an `options` argument. The indexed array values are treated as `history`, named keys take the place of legacy arguments. For compatibility, OpenOS 1.6 will respect the previous usage, i.e. parameter list.
     * - The new `ops` parameter supports a new key, `nowrap`. The default behavior of term.read wrap the cursor and input vertically. Legacy behavior scrolled the input horizontally, i.e. `term.read({nowrap=true})`The optional `history` table can be used to provide predefined text that can be cycled through via the up and down arrow keys. It must be a sequence (i.e. the keys must be a gap-less integral interval starting at 1). This is used for the command history in shell and Lua interpreter, for example. If text is entered and confirmed with enter, it will be added to the end of this table.The `dobreak` parameter, when set to `false` (**`nil` defaults to `true`!**) will not enter a new line after input was completed (e.g. by the user pressing enter).The `hint` parameter is used for tab completion. It can either be a table with strings or a function that returns a table of strings and takes two parameters, the current text and the position in that text, i.e. the signature of the callback is `function(line:string, pos:number):table`.The `pwchar` parameter, when given, causes input to be masked using the first char of the given string. For example, providing `"*"` will make all entered characters appear as stars. The returned value will still be the actual text inserted, of course.The function will return a string if input was successful, `nil` if the pipe was closed (^d), or `false` if the pipe was interrupted (^c)*Note*: `io.stdin:read()` uses this function.*Note 2*: This will return the entered string with the 
    */
    export function read(history?: string[], dobreak?: boolean, hint?: (line: string, pos: number) => string[], pwchar?: string): string

    /**
     * Allows writing optionally wrapped text to the terminal starting at the current cursor position, updating the cursor accordingly. It automatically converts tab characters to spaces using `text.detab`. If `wrap` is true, it will automatically word-wrap the text. It will scroll the displayed buffer if the cursor exceeds the bottom of the display area, but *not* if it exceeds the right of the display area (when `wrap` is false).*Note*: This method respects io redirection. That is to say, `term.write` writes to the same stream as io.stdout
    */
    export function write(value: string, wrap?:  boolean): void

    /**
     * (new in OpenOS 1.6)Binds a `gpu` proxy (not address) to the terminal. This method is called automatically during boot when the gpu and screen become available. Note that if manually rebinding a terminal to a screen with different width and height, the terminal draw area will be truncated and not maximized. This changes the gpu used in all terminal output, not just via the term api, i.e. `io.write`, `print`, `io.stdout:write`, etc all use the same output stream, and term.bind is used to change the `gpu` used.
    */
    export function bind(gpu: ComponentGpu): void

    /**
     * (new in OpenOS 1.6)Convenience method, simply calls `getScreen` on the terminal's bound gpu (see `term.bind`)
    */
    export function screen(): string

    /**
     * (new in OpenOS 1.6)Gets the address of the keyboard the terminal is accepting key events from.
    */
    export function keyboard(): string


}

/**
 * @see https://ocdoc.cil.li/api:shell
 * @noSelf
 */
declare module "shell" {
    /**
     * Gets the value of a specified alias, if any. If there is no such alias returns `nil`.
    */
    export function getAlias(alias: string): string

    /**
     * Defines a new alias or updates an existing one. Pass `nil` as the value to remove an alias. Note that aliases are not limited to program names, you can include parameters as well. For example, `view` is a default alias for `edit -r`.
    */
    export function setAlias(alias: string, value: string | null): void

    /**
     * Returns an iterator over all known aliases.
    */
    export function aliases(): LuaTable<string, string>

    /**
     * Gets the path to the current working directory. This is an alias for `os.getenv("PWD")`.
    */
    export function getWorkingDirectory(): string

    /**
     * Sets the current working directory. This is a checked version of `os.setenv("PWD", dir)`.
    */
    export function setWorkingDirectory(dir: string): void

    /**
     * Gets the search path used by `shell.resolve`. This can contain multiple paths, separated by colons (`:`).This is an alias for `os.getenv("PATH")`.
    */
    export function getPath(): string

    /**
     * Sets the search path. Note that this will replace the previous search paths. To add a new path to the search paths, do this:`shell.setPath(shell.getPath() .. ":/some/path")`This is an alias for `os.setenv("PATH", value)`.
    */
    export function setPath(value: string): void

    /**
     * Tries to “resolve” a path, optionally also checking for files with the specified extension, in which case `path` would only contain the *name*. This first searches the working directory, then all entries in the search path (see `getPath`/`setPath`).If no file with the exact specified name exists and an extension is provided, it will also check for a file with that name plus the specified extension, i.e. for `path .. "." .. ext`.
    */
    export function resolve(path: string, ext?:  string): string

    /**
     * Runs the specified command. This runs the default shell (see `os.getenv("SHELL")`) and passes the command to it. `env` is the environment table to use for the shell, and thus for the called program, in case you wish to sandbox it or avoid it cluttering the caller's namespace. Additional arguments are passed directly to the first program started based on the command, so you can pass non-string values to programs.Returns values similar to `pcall` and `coroutine.resume`: the first returned value is a boolean indicating success or error. In case of errors, the second returned value is a detailed error message. Otherwise the remaining returned values are the values that were returned by the specified program when it terminated.
    */
    export function execute(command: string, env: LuaTable<string, any>, ...extra: string[]): LuaMultiReturn<[...boolean[]]>

    /**
     * Utility methods intended for programs to parse their arguments. Will return two tables, the first one containing any “normal” parameters, the second containing “options”. Options are indicated by a leading `-`, and all options must only be a single character, since multiple characters following a single `-` will be interpreted as multiple options. Options specified with 2 dashes are not split and can have multiple letters. Also, 2-dash options can be given values by using an equal sign. The following examples all assume the script `program` parses the options using `local args, ops = shell.parse(...)`.
    */
    export function parse(args: any[]): LuaMultiReturn<[LuaIterable<string>, LuaTable<string, any>]>


}

/**
 * @see https://ocdoc.cil.li/api:text
 * @noSelf
 */
declare module "text" {
    /**
     * Converts tabs in a string to spaces, while aligning the tags at the specified tab width. This is used for formatting text in `term.write`, for example.
    */
    export function detab(value: string, tabWidth: number): string

    /**
     * Pads a string with whitespace on the right up to the specified length.
    */
    export function padRight(value: string, length: number): string

    /**
     * Pads a string with whitespace on the left up to the specified length.
    */
    export function padLeft(value: string, length: number): string

    /**
     * Removes whitespace characters from the start and end of a string.
    */
    export function trim(value: string): string

    /**
     * Wraps the provided string to specified width.
    */
    export function wrap(value:string, width:number, maxWidth:number): void

    /**
     * Returns a wrapper function around `text.wrap`.
    */
    export function wrappedLines(value:string, width:number, maxWidth:number): void

    /**
     * Splits the input string into a table, using space as the delimiter.
    */
    export function tokenize(value:string): void
}

/**
 * @see https://ocdoc.cil.li/api:transforms
 * @noSelf
 */
declare module "transforms" {
    /**
     * Behaves similarly to `string.sub`. Returns a sub table of `tbl` from `first` to `last`.
    */
    export function sub <T> (tbl: T[], first: number, last: number | null): T[]

    /**
     * Returns the first index in `tbl` (between indexes `first` and `last`, inclusively) where `predicate` is satisfied. The 2nd return is also the ending index of the match. General examples will have the same two values returned, i.e. a match of length 1. The `predicate` can (optionally) return a 2nd return value to indicate the size of the match.In the case that `predicate` is a table, `transforms.first()` returns the starting and ending index of the first matching sub table in `tbl` that matches ANY one of the tables in `predicate`.
    */
    export function first <T> (tbl: T[], predicate: (element: T) => boolean, first: number | null, last: number | null): LuaMultiReturn<[number, number]>

    /**
     * Returns a list of sub lists from `tbl`, generated by `partioner` within the range from `first` to `last`. `partioner` is a `predicate` function, defined above.The `index` parameter passed to the `partitioner` will skip ranges, i.e. it will increase by `n` where `n` is the size of the partition.The `partitioner` predicate for this method must return the starting AND ending index of satisfied element sets. Again, see the `predicate` info above.
    */
    export function partition <T> (tbl: T[], partioner: (element: T) => boolean, first: number | null, last: number | null): object

    /**
     * Returns true if the subset of `tbl` from `first` to `last` fully composes `v` aligned at the first index. Assuming `first` and `last` have been adjusted for negative wrap around, that is to say:`v[1] == tbl[first + 0]``v[2] == tbl[first + 1]`…`v[#v] == tbl[first + #v - 1]`Where `first + #v - 1` is within the bounds of `[first, last]` of `tbl`.
    */
    export function begins(tbl: object, sub: object, first: number | null, last: number | null): void

    /**
     * Returns an adaptation of each element in `tbl` from `first` to `last`. Any `nil` result of the `adapter` is ignored, and not appended to the result.The `adapter` follows the `predicate` signature except for the handling of the return values- **Adapter Returns**  The simple case is to return a single value. E.g. `tx.foreach({'a', 'b', 'c'}, string.upper)` would return `{'A', 'B', 'C'}`.  The adapter can return `nil` to skip a value. E.g. `tx.foreach({'1', 'foobar', '2'}, function(n) return tonumber(n) end)` would return `{1, 2}`.  But the `adapter` can return a second value that is used in place of the next sequence number. E.g. `tx.foreach({'1','foobar','3'},function(n,i) return tonumber(n), tostring(i) end)` would return `{["1"]=1, ["3"]=3}`
    */
    export function foreach(tbl: object, adapter: (...args: any[]) => {}, first: number | null, last: number | null): void


}

/**
 * @see https://ocdoc.cil.li/api:unicode
 * @noSelf
 */
declare module "unicode" {
    /**
     * UTF-8 aware version of `string.char`. The values may be in the full UTF-8 range, not just ASCII.
    */
    export function char(...value: number[]): string

    /**
     * Returns the width of the first character given. For example, for `シ` it'll return `2`, where `a` would return `1`.
    */
    export function charWidth(...value: string[]): number

    /**
     * Returns if the width of the first character given is greater than 1. For example, for `シ` it'll return `true`, where `a` would return `false`.
    */
    export function isWide(...value: string[]): boolean

    /**
     * UTF-8 aware version of `string.len`. For example, for `Ümläüt` it'll return `6`, where `string.len` would return `9`.
    */
    export function len(value: string): number

    /**
     * UTF-8 aware version of `string.lower`.
    */
    export function lower(value: string): string

    /**
     * UTF-8 aware version of `string.reverse`. For example, for `Ümläüt` it'll return `tüälmÜ`, where `string.reverse` would return `tälm`.
    */
    export function reverse(value: string): string

    /**
     * UTF-8 aware version of `string.sub`.
    */
    export function sub(value: string, i:number, j?: number): string

    /**
     * UTF-8 aware version of `string.upper`.
    */
    export function upper(value: string): string

    /**
     * Returns the width of the entire string.
    */
    export function wlen(value: string): number

    /**
     * Truncates the given string up to but not including `count` width. If there are not enough characters to match the wanted width, the function errors.
    */
    export function wtrunc(value: string, count: number): string
}


/**
 * @noSelf
 * @see https://ocdoc.cil.li/api:component
 */
declare module "component" {
    /**
     * Returns a table with all components currently attached to the computer, with address as a key and component type as a value. It also provides
     *  iterator syntax via `__call`, so you can use it like so: `for address, componentType in component.list() do ... end`
     * If `filter` is set this will only return components that contain the filter string (this is *not* a pattern/regular expression). For example,
     *  `component.list("red")` will return `redstone` components.1
     * If `true` is passed as a second parameter, exact matching is enforced, e.g. `red` will *not* match `redstone`.
     * @return Returns iterator of multi-return `address` and `componentType`
     */
    export function list(filter?: string, exact?: boolean): LuaIterable<LuaMultiReturn<[address: string, componentType: string]>>
    /**
     * Get the component type of the component with the specified address.
     */
    export function type(address: string): string
    /**
     * Return slot number which the component is installed into. Returns -1 if it doesn't otherwise make sense.
     */
    export function slot(address: string): string;

    /**
     * Tries to resolve an abbreviated address to a full address. Returns the full address on success, or `nil` and an error message otherwise. Optionally filters by component type.
     * @param address The abbreviated address that's used to resolve the full address
     * @param componentType Type of the component, optional.
     * @return If it's successfully executed, it will return its exact address that can be used in {@link component.proxy}. Otherwise it will return `null` and a string of reason of it in LuaMultiReturn form.
     */
    export function get(address: string, componentType?: string): string | LuaMultiReturn<[null, string?]>
    /**
     * Checks if there is a primary component of the specified component type.
     */
    export function isAvailable(componentType: string): boolean
    /**
     * Gets the proxy for the primary component of the specified type. Throws an error if there is no primary component of the specified type.
     */
    export function getPrimary(componentType: string): IComponent
    /**
     * Sets a new primary component for the specified component type. The address may be abbreviated, but must be valid if it is not `nil`. Triggers the `component_unavailable` and `component_available` signals if set to `nil` or a new value, respectively.
     */
    export function proxy(componentType: string, address: string): void

    /**
     * Gets a 'proxy' object for a component that provides all methods the component provides as fields, so they can becalled more directly (instead of via `invoke`). This is what's used to generate 'primaries' of the individual component types, i.e. what you get via `component.blah`.
     * For example, you can use it like so: `component.proxy(component.list("redstone")()).getInput(sides.north)`, which
     * gets you a proxy for the first `redstone` component returned by the `component.list` iterator, and then calls `getInput` on it.
     * @apiNote The method name may be a little bit confusing. It's more like `get`, and the component.get is more like a `findComponent`.
     * @param address The exact address of a component
     */
    export function proxy(address: string): IComponent | null
}

/**
 * Declaration of abstract component class. Every component class should be implementing this class.
 * @noSelf
 */
interface IComponent {
    type: string;
    address: string;
}

/**
 * @noSelf
 */
interface Component3DPrinter extends IComponent {
    /**
     * Commit and begin printing the current configuration.
    */
    commit(count:number):boolean

    /**
     * Set the label for the volume being printed.
    */
    setLabel(value:string): void

    /**
     * Get the current label for the volume being printed.
    */
    getLabel():string

    /**
     * Sets the tooltip for the volume being printed.
    */
    setTooltip(value:string): void

    /**
     * Gets the current tooltip of the volume being printed.
    */
    getTooltip():string

    /**
     * Set whether the printed block should automatically return to its off state.
    */
    setButtonMode(value:boolean): void

    /**
     * Gets whether the printed block should automatically return to its off state.
    */
    isButtonMode():boolean

    /**
     * Sets whether the printed block should emit a redstone signal while in its active state.
    */
    setRedstoneEmitter(value:boolean): void

    /**
     * Gets whether the printed block should emit a redstone signal while in its active state.
    */
    isRedstoneEmitter():boolean

    /**
     * Adds the shape to the printer's current configuration, optionally specifying whether it is for the off or on state.
    */
    addShape(minX:number, minY:number, minZ:number, maxX:number, maxY:number, maxZ:number, texture:string ,state?:boolean ,tint?:number): void

    /**
     * Gets the number of shapes in the current configuration.
    */
    getShapeCount():number

    /**
     * Gets the maximum allowed number of shapes.
    */
    getMaxShapeCount():number

    /**
     * The current state of the printer, 'busy' or 'idle' (string), followed by the progress (number) or model validity (boolean), respectively.
    */
    status():LuaMultiReturn<[string, number]> | boolean

    /**
     * Resets the current job for the printer and stops printing (current job being printed will finish).
    */
    reset(): void


}

/**
 * @noSelf
 */
interface ComponentAbstractBus extends IComponent {
    /**
     * Returns whether the local bus interface is enabled.
    */
    getEnabled(): boolean

    /**
     * Sets whether the local bus interface should be enabled
    */
    setEnabled(enabled: boolean): void

    /**
     * Returns the local interface address. `number` is a 16 bit hexadecimal number (0xFFFF being a broadcast). Returns `0` if an address has not yet been set.
    */
    getAddress(): number

    /**
     * Sets the local interface address. `number` is a 16bit hexadecimal number.
    */
    setAddress(address: number): void

    /**
     * Scans the abstract bus for attached devices and returns them in a list.
    */
    scan(mask: number): LuaPairsIterable<number, any>

    /**
     * Sends data across the abstract bus. The table `data` is in the form of key-value pairs, e.g.
     * `lua> component.abstract_bus.send(0xFFFF, { ["action"]="dial", ["address"]="Losomdeh Salothirt Erpac" })`
     * - See SGTech2 documentation for more info on the Abstract Bus.
    */
    send(address: number, data: object): boolean

    /**
     * Returns the maximum size a packet can be sent over the bus.
    */
    maxPacketSize(): number

}

/**
 * @noSelf
 */
interface ComponentAccessPoint extends IComponent {
    /**
     * Get the signal strength (range) used when relaying messages.
    */
    getStrength():number

    /**
     * Set the signal strength (range) used when relaying messages.
    */
    setStrength(strength:number):number

    /**
     * Check whether Access Point is acting as a repeater (re-send received wireless messages).
    */
    isRepeater():boolean

    /**
     * Sets whether Access Point should act as a repeater (re-send received wireless messages).
    */
    setRepeater(enabled:boolean):boolean


}

/**
 * @noSelf
 */
interface ComponentChunkLoader extends IComponent {
    /**
     * Returns whether the chunkloader is currently active.
    */
    isActive():boolean

    /**
     * Enables or disables the chunkloader. Returns the new state, which may be false if no chunk loading ticket could be acquired.
    */
    setActive(enabled:boolean):boolean
}

/**
 * @noSelf
 */
interface ComponentComputer extends IComponent {
    /**
     * Tries to start the computer. Returns `true` on success, `false` otherwise. Note that this will also return `false` if the computer was already running. If the computer is currently shutting down, this will cause the computer to reboot instead.
    */
    start(): boolean

    /**
     * Tries to stop the computer. Returns `true` on success, `false` otherwise. Also returns `false` if the computer is already stopped.
    */
    stop(): boolean

    /**
     * Returns whether the computer is currently running.
    */
    isRunning(): boolean

    /**
     * Plays a tone, useful to alert users via audible feedback. Supports frequencies from 20 to 2000Hz, with a duration of up to 5 seconds.
    */
    beep(frequency:number, duration?:number): void

    /**
     * Returns a table of device information. Note that this is architecture-specific and some may not implement it at all.
    */
    getDeviceInfo(): LuaPairsIterable<string, LuaPairsIterable<string, any>>

    /**
     * Attempts to crash the computer for the specified reason.
    */
    crash(reason: string): void

    /**
     * Returns the computer's current architecture.
    */
    getArchitecture(): string

    /**
     * Returns whether or not the computer is, in fact, a robot.
    */
    isRobot(): boolean


}

/**
 * @noSelf
 */
interface ComponentCrafting extends IComponent {
    /**
     * Crafts up to count numbers or a full stack.
     *
     * count - How many items to craft. I f omitted then the robot will craft as many items as possible. In any case the robot will never craft more than one full stack of crafting result items at once.
     * Returns: true if at least one item was crafted, false otherwise.
     * Note that if you specify an amount of items to be crafted that is lower than the minimum resulting stack size (i.E. order to craft 1 stick, but minimum result stack size is 4), then nothing will be crafted, however this will still return true.
     * 
     * If successful the crafting result will be placed in the currently selected slot, or (if occupied by something else) will be placed into the next slot containing similar items or in the next free slot. This can be one of the slots of the crafting area, which would make it impossible to craft the same item again until that area is cleared.
     */
    craft(count?: number): boolean
}

/**
 * @noSelf
 */
interface ComponentDataCardT1 extends IComponent {
    /**
     * Computes CRC-32 hash of the data. Result is in binary format.
    */
    crc32(data:string):string

    /**
     * Applies base64 decoding to the data.
    */
    decode64(data:string):string

    /**
     * Applies base64 encoding to the data. Result is in binary format.
    */
    encode64(data:string):string

    /**
     * Computes MD5 hash of the data. Result is in binary format
    */
    md5(data:string):string

    /**
     * Computes SHA2-256 hash of the data. Result is in binary format.
    */
    sha256(data:string):string

    /**
     * Applies deflate compression to the data.
    */
    deflate(data:string):string

    /**
     * Applies inflate decompression to the data.
    */
    inflate(data:string):string

    /**
     * The maximum size of data that can be passed to other functions of the card.
    */
    getLimit():number



}

/**
 * @noSelf
 */
interface ComponentDataCardT2 extends ComponentDataCardT1 {

    /**
     * Applies AES encryption to the data using the key and (preferably) random IV.
    */
    encrypt(data:string, key:string, iv:string):string

    /**
     * Reverses AES encryption on the data using the key and the IV.
    */
    decrypt(data:string, key:string, iv:string):string

    /**
     * Generates a random binary string of `len` length.
    */
    random(len:number):string

}

/**
 * @noSelf
 */
interface ComponentDataCardT3 extends ComponentDataCardT2 {
    /**
     * Generates a public/private key pair for various cryptiographic functions.
     * Optional second parameter specifies key length, 256 or 384 bits accepted.
     * Key types include “ec-public” and “ec-private”. Keys can be serialized with
     * `key.serialize():string` Keys also contain the function `key.isPublic():boolean`
    */
    generateKeyPair(bitLen? :number): [ECUserdata, ECUserdata]

    /**
     * Generates a signiture of data using a private key. If signature is present
     * verifies the signature using the public key, the previously generated
     * signature string and the original string.
    */
    ecdsa(data:string, key:ECUserdata, sig?:string):string | boolean

    /**
     * Generates a Diffie-Hellman shared key using the first user's private key and
     * the second user's public key. An example of a basic key relation:
     * `ecdh(userA.private, userB.public) == ecdh(userB.private, userA.public)`
    */
    ecdh(privateKey:ECUserdata, publicKey:ECUserdata):string

    /**
     * Transforms a key from string to it's arbitrary type.
    */
    deserializeKey(data:string, type:string):ECUserdata

}

/**
 * @noSelf
 */
interface ECUserdata {
    type: string

    /**
     * Returns whether key is public.
     */
    isPublic(): boolean
    /**
     * Returns string representation of key. Result is binary data.
     */
    serialize(): string
    /**
     * Returns type of key.
     */
    keyType(): string
}

/**
 * @noSelf
 */
interface Enchantment {
    /**
     * Display name of the enchnatment, including it's level (e.g. `Sharpness II`)
     */
    label: string,
    /**
     * Level of the enchantment
     */
    level: number,
    /**
     * Internal name/ID of the enchnatmnet (e.g. enchantment.durability)
     */
    name: string
}

/**
 * @noSelf
 */
interface ItemStack {
    /**
     * Damage of the item
     */
    damage: number,
    /**
     * Does the item has extra NBT tags
     */
    hasTag?: boolean,
    /**
     * Display name of the item (Server-side)
     */
    label?: string,
    /**
     * Maxium damage of the item that it can get
     */
    maxDamage?: string,
    /**
     * Maxium stack size of the item
     */
    maxSize?: string,
    /**
     * The namespace and the ID of the item
     */
    name: string,
    /**
     * Current stack size / amount of item.
     */
    size?: number,
    /**
     * Id of the item. Only aviliable if `insertIdsInConverters` is on
     */
    id?: number | null
    /**
     * Ore dict of the item.
     * @see https://mcforge.readthedocs.io/en/1.12.x/utilities/oredictionary/
     */
    oreNames?: LuaIterable<string> | null,
    /**
     * List of enchnatments. Can be null if it has no enchantment
     */
    enchantments?: LuaIterable<Enchantment> | null

    ////////// Items provided by mods //////////
    /**
     * Charge state of the item. Seen in IC2
     * @knownSupport IC2
     */
    charge?: number | null,
    /**
     * Remaining energy of the item. Should work on most mods
     * @doesntSupport IC2
     * @knownSupport Refined Storage
     */
    Energy?: number | null,
    /**
     * Seen in IC2 and OpenComputer's source (ConverterItemStack).
     * OpenComputer developers left a comment "IC2 reactor items custom damage", so that's probably what it's for
     * @knownSupport IC2
     */
    customDamage?: number,

    // TODO: Draconic Upgrades Support (OpenComputers supports it)
}

/**
 * @noSelf
 */
interface ComponentDatabase extends IComponent {
    /**
     * Get the representation of the item stack stored in the specified slot.
    */
    get(slot:number): ItemStack

    /**
     * Computes a hash value for the item stack in the specified slot. This value is guaranteed to be the same for identical item stacks, allowing comparison of item stacks across a network (by comparing the hash values).
    */
    computeHash(slot:number):string

    /**
     * Get the index of an item stack with the specified hash. Returns a negative value if no such stack was found.
    */
    indexOf(hash:string):number

    /**
     * Clears the specified slot. Returns true if there was something in the slot before.
    */
    clear(slot:number):boolean

    /**
     * Copies an entry to another slot, optionally to another database. Returns true if something was overwritten.
    */
    copy(fromSlot:number, toSlot:number, address?:string):boolean

    /**
     * Copies the data stored in this database to another database with the specified address.
    */
    clone(address:string):number


}

/**
 * @noSelf
 * @deprecated Component not accessible in survival mode
 */
interface ComponentDebug extends IComponent {
    /**
     * Changes the component network's energy buffer by the specified delta.
    */
    changeBuffer(value:number):number

    /**
     * Connect the debug card to an opencomputers-compatible block at the specified coordinates.
    */
    connectToBlock(x:number, y:number, z:number):boolean

    /**
     * Get the entity of a player.
    */
    getPlayer(name:string): DebugPlayer

    /**
     * Get a list of currently logged-in players.
    */
    getPlayers(): LuaIterable<DebugPlayer>

    /**
     * Get the world object for the specified dimension ID, or the container's.
    */
    getWorld(id?: number): DebugWorld

    /**
     * Get a list of all world IDs, loaded and unloaded.
    */
    getWorlds(): LuaIterable<DebugWorld>

    /**
     * Get the container's X position in the world.
    */
    getX():number

    /**
     * Get the container's Y position in the world.
    */
    getY():number

    /**
     * Get the container's Z position in the world.
    */
    getZ():number

    /**
     * Get whether a mod or API is loaded.
    */
    isModLoaded(name:string):boolean

    /**
     * Runs an arbitrary command using a fake player. The first return value will be 1 if the command ran successfully, or 0 otherwise. The second return value will contain what the command returned, or an error message. If the command doesn't return anything, such as /me, the second value will be nil.
    */
    runCommand(command:string):LuaMultiReturn<[number, string]>

    /**
     * Test method for user-data and general value conversion.
    */
    test(): any

    /**
     * Get the scoreboard object for the world
    */
    getScoreboard(): DebugScoreboard

    /**
     * Sends data to the debug card with the specified address.
    */
    sendToDebugCard(address:string, ...data: any): void

    /**
     * Sends text to the specified player's clipboard if possible.
    */
    sendToClipboard(player:string, text:string): void

    /**
     * Returns contents at the location in world by id (defaults to host world). This method behaves the same as the move check for the robot and drone. The first return value is a boolean indicating whether a robot or drone would be able to enter the location (true means it would be blocked and cannot move into that space). The second return is a string value short name of the type of obstruction. Possible values here include: EntityLivingBase, EntityMinecart, air, liquid, replaceable, passable, and solid.The final value returned is a serialized or table representation of the entity or block scanned at the location. The following code snippet can be used to debug what is possibly blocking the robot from moving forward, if the robot is facing in the negative x direction.
    */
    scanContentsAt(x: number, y: number, z: number, worldId?:  number): LuaMultiReturn<[boolean, string, any]>

}

/**
 * @noSelf
 */
interface DebugWorld {

    /**
     * Get the metadata of the block at the specified coordinates.
    */
    getMetadata(x:number, y:number, z:number):number

    /**
     * Get the ID of the block at the specified coordinates.
     */
    getBlockId(x:number, y:number, z:number):number

    /**
     * Gets the numeric id of the current dimension.
     */
    getDimensionId():number

    /**
     * Check whether the block at the specified coordinates is loaded.
     */
    isLoaded(x:number, y:number, z:number):number

    /**
     * Gets the seed of the world.
     */
    getSeed():number

    /**
     * Remove some fluid from a tank at the specified location.
     */
    removeFluid(amount:number, x:number, y:number, z:number, side:number):boolean

    /**
     * Insert some fluid into the tank at the specified location.
     */
    insertFluid(id:string, amount:number, x:number, y:number, z:number, side:number):boolean

    /**
     * Gets the name of the current dimension.
     */
    getDimensionName():string

    /**
     * Get the current world time.
     */
    getTime():number

    /**
     * Set the current world time.
     */
    setTime(value:number): void

    /**
     * Get the light value (emission) of the block at the specified coordinates.
     */
    getLightValue(x:number, y:number, z:number):number

    /**
     * Returns whether it is currently raining.
     */
    isRaining():boolean

    /**
     * Sets whether it is currently raining.
     */
    setRaining(value:boolean): void

    /**
     * Returns whether it is currently thundering.
     */
    isThundering():boolean

    /**
     * Sets whether it is currently thundering.
     */
    setThundering(value:boolean): void

    /**
     * Set the block at the specified coordinates.
     */
    setBlock(x:number, y:number, z:number, id:number | string, meta:number):number

    /**
     * Set all blocks in the area defined by the two corner points (x1, y1, z1) and (x2, y2, z2).
     */
    setBlocks(x1:number, y1:number, z1:number, x2:number, y2:number, z2:number, id:number | string, meta:number):number

    /**
     * Reduce the size of an item stack in the inventory at the specified location.
     */
    removeItem(x:number, y:number, z:number, slot:number, count?:number):number

    /**
     * Insert an item stack into the inventory at the specified location. NBT tag is expected in JSON format.
     */
    insertItem(id:string, count:number, damage:number, nbt:string, x:number, y:number, z:number, side:number):boolean

    /**
     * Get the current spawn point coordinates.
     */
    getSpawnPoint():LuaMultiReturn<[number, number, number]>

    /**
     * Set the spawn point coordinates.
     */
    setSpawnPoint(x:number, y:number, z:number): void

    /**
     * Get whether the block at the specified coordinates is directly under the sky.
     */
    canSeeSky(x:number, y:number, z:number):number

    /**
     * Get the light opacity of the block at the specified coordinates.
     */
    getLightOpacity(x:number, y:number, z:number):number

    /**
     * Check whether the block at the specified coordinates has a tile entity.
     */
    hasTileEntity(x:number, y:number, z:number):number

    /**
     * Play a sound at the specified coordinates.
     */
    playSoundAt(x:number, y:number, z:number, sound:string, range:number): void

    /**
     * Get the NBT of the block at the specified coordinates.
     */
    getTileNBT(x:number, y:number, z:number):object

    /**
     * Set the NBT of the block at the specified coordinates.
     */
    setTileNBT(x:number, y:number, z:number, nbt:object):boolean

    /**
     * Gets the block state for the block at the specified position, optionally getting additional display related data
     */
    getBlockState(x:number, y:number, z:number, actualState?: boolean): void

}

/**
 * @noSelf
 */
interface DebugPlayer {

    /**
     * Get the player's world object.
     */
    getWorld():DebugWorld

    /**
     * Get the player's game type.
     */
    getGameType(): "survival" | "creative" | "adventure"

    /**
     * Set the player's game type (survival, creative, adventure).
     */
    setGameType(gametype: "survival" | "creative" | "adventure"): void

    /**
     * Get the player's health.
     */
    getHealth():number

    /**
     * Set the player's health.
     */
    setHealth(health:number): void

    /**
     * Get the player's max health.
     */
    getMaxHealth():number

    /**
     * Get the player's position.
     */
    getPosition(): LuaMultiReturn<[number, number, number]>

    /**
     * Set the player's position.
     */
    setPosition(x:number, y:number, z:number): void

    /**
     * Get the player's total experience
     */
    getExperienceTotal():number

    /**
     * Get the player's level
     */
    getLevel():number

    /**
     * Add a level to the player's experience level
     */
    addExperienceLevel(level:number): void

    /**
     * Remove a level from the player's experience level
     */
    removeExperienceLevel(level:number): void

    /**
     * Adds the item stack to the players inventory
     */
    insertItem(id:string, amount:number, meta:number, nbt?: string):number

    /**
     * Clear the players inventory
     */
    clearInventory(): void
}

/**
 * @noSelf
 */
interface DebugScoreboard {
    /**
     * Create a new objective for the scoreboard
     */
    addObjective(objectiveName:string, objectiveCriteria:string): void

    /**
     * Remove an objective from the scoreboard
     */
    removeObjective(objectiveName:string): void

    /**
     * Increases the score of a player for a certain objective
     */
    increasePlayerScore(playerName:string, objectiveName:string, score:number): void

    /**
     * Decrease the score of a player for a certain objective
     */
    decreasePlayerScore(playerName:string, objectiveName:string, score:number): void

    /**
     * Add a player to a team
     */
    addPlayerToTeam(player:string, team:string):boolean

    /**
     * Remove a player from a specific team
     */
    removePlayerFromTeam(player:string, team:string):boolean

    /**
     * Remove a player from their team
     */
    removePlayerFromTeams(player:string):boolean

    /**
     * Add a team to the scoreboard
     */
    addTeam(team:string): void

    /**
     * Remove a team from the scoreboard
     */
    removeTeam(teamName: string): void

    /**
     * Gets the score of a player for a certain objective
     */
    getPlayerScore(playerName:string, objectiveName:string):number

    /**
     * Sets the score of a player for a certain objective
     */
    setPlayerScore(playerName:string, objectiveName:string, score:number): void

}

/**
 * @noSelf
 * @untested Unsure the way to obtain the internal and external inventory object, but by reading source of OpenComputers I think that's how to do it.
 */
interface ComponentDrone extends IComponent, InternalInventory, ExternalInventory {
    /**
     * Get the status text currently being displayed in the GUI.
    */
    getStatusText():string

    /**
     * Set the status text to display in the GUI, returns new value.
    */
    setStatusText(value:string):string

    /**
     * Change the target position by the specified offset.
    */
    move(dx:number, dy:number, dz:number): void

    /**
     * Get the current distance to the target position.
    */
    getOffset():number

    /**
     * Get the current velocity in m/s.
    */
    getVelocity():number

    /**
     * Get the maximum velocity, in m/s.
    */
    getMaxVelocity():number

    /**
     * Get the currently set acceleration.
    */
    getAcceleration():number

    /**
     * Try to set the acceleration to the specified value and return the new acceleration.
    */
    setAcceleration(value:number):number

    /**
     * Get the name of the robot.
    */
    name():string

    /**
     * Lets the robot use the currently equipped item in the tool slot against the block or space directly in front of the robot. Returns `true` if successful (may take time depending on block being interacted with - e.g.. Obsidian takes time to mine). Returns `false` if the operation fails with a description of why it failed.
    */
    swing(side:number): LuaMultiReturn<[boolean, string?]>

    /**
     * Attempts to use the item currently equipped in the tool slot in the same way as if the player would make a right-click.
     * @param side if given the robot will try to 'right-click' only on the surface as specified by side, otherwise the robot will try all possible sides. See the [Sides API](https://ocdoc.cil.li/api:sides) for a list of possible sides.
     * @param sneaky if set to `true` the robot will simulate a sneak-right-click (like if the player would be using shift during a right-click). Some items (like buckets) will behave differently if this is set to true.
     * @param duration how long the item is used. This is useful when using charging items like a bow.
     * @return true if the robot could interact with the block or entity in front of it, false otherwise. If successful the secondary parameter describes what the robot interacted with and will be one of 'block*activated', 'item*placed', 'item*interacted' or 'item*used'.
     * This function has a very broad use as the robot can simulate right-clicks with most items. The only difference to players is that the robot cannot use items that specifically require the user to be an entity as the robot is a block. So drinking potions, eating food or throwing an ender pearl will fail.
     * This functions secondary return value can be used to determine what the result of the right-click caused. Which of the item results is returned is not always obvious and requires some testing beforehand. Also note that while robots are not affected by harmful potions they can be destroyed by explosions, so be careful when you place, throw or activate any form of explosives with this function. Possible values for the second return value:
     * - `block_activated` - a block was activated (like levers, switches or doors).
     * - `item_interacted` - the equipped tool interacted with the world, for example sheers when used on a sheep.
     * - `item_placed` - something was placed into the world. This is not only caused by placeable blocks, but as well by items that cause blocks or entities to appear in the world (like flint and stone or mob eggs).
     * - `item_used` - the equipped was activated, like a splash-potion.
     * - `air` - the equipped item requires a target but there was none. Note that if your robot has an Angel upgrade, this will never be returned, however some actions might still cause no effect.
    */
    use(side: number, sneaky?:  boolean, duration?:  number): LuaMultiReturn<[boolean, string?]>

    /**
     * Tries to place the block in the currently selected inventory slot on the specified side of the robot (if the side is supported). If **sneaky** is set to `true`, the robot will simulate a sneak-placement (shift-click). Returns `true` if successfully placed. Returns `false` if the operation fails. If an unsupported value is provided as a parameter, the operation will fail with a description of why it failed.
    */
    place(side: number, sneaky?:  boolean): LuaMultiReturn<[boolean, string?]>

    /**
     * Get the current color of the activity(robot) or flap(drone) light as an integer encoded RGB value (0xRRGGBB).
    */
    getLightColor():number

    /**
     * Set the color of the activity(robot) or flap(drone) light to the specified integer encoded RGB value (0xRRGGBB).
    */
    setLightColor(value:number):number

}

/**
 * @noSelf
 */
interface InternalInventory {


    /**
     * Returns the size of the device's internal inventory.
     */
    inventorySize():number

    /**
     * Get the currently selected slot; set the selected slot if specified.
     */
    select(slot?: number):number

    /**
     * Get the number of items in the specified slot, otherwise in the selected slot.
     */
    count(slot?: number):number

    /**
     * Get the remaining space in the specified slot, otherwise in the selected slot.
     */
    space(slot?: number):number

    /**
     * Compare the contents of the selected slot (in the robot inventory) to the contents of the specified slot (also in the robot inventory).
     */
    compareTo(otherSlot:number):boolean

    /**
     * Move the specified amount of items from the selected slot into the specified slot. If no amount is specified, the entire stack is moved to the target slot.
     */
    transferTo(toSlot:number, amount?: number):boolean

    /**
     * Returns the number of tanks installed in the robot.
     */
    tankCount():number

    /**
     * Selects the specified tank (if robot contains more than one [Tank upgrade](https://ocdoc.cil.li/item:tank_upgrade)). Any tank operations will use this tank.
     */
    selectTank(tank:number): void

    /**
     * Returns the fluid level in the specified tank. If no tank specified, returns the fluid level in the selected tank (using `selectTank()`).
     */
    tankLevel(tank?: number):number

    /**
     * Returns the remaining fluid capacity (empty space) in the specified tank. If not tank specified, returns the remaining capacity in the selected tank.
     */
    tankSpace(tank?: number):number

    /**
     * Tests whether the fluid in the selected tank (in the robot inventory) is the same as in the specified tank (requires [Tank upgrade](https://ocdoc.cil.li/item:tank_upgrade)).
     */
    compareFluidTo(tank:number):boolean

    /**
     * Transfer the specified amount of fluid in the selected tank into the specified tank. If no volume is specified, the robot will attempt to transfer 1000mB.
     */
    transferFluidTo(tank:number, count?: number):boolean
}

/**
 * @noSelf
 */
interface ExternalInventory {

    /**
     * Detects the block on the given side, relative to the robot, and returns whether or not the robot can move into the block, as well as a general description of the block. Returns `true` if the block will prevent the robot from moving forward, `false` otherwise. Drones return `true` even if the block is passable.
     * @param side See the [Sides API](https://ocdoc.cil.li/api:sides) for a list of possible sides.
     */
    detect(side:number):boolean

    /**
     * Compares fluid in the selected tank (requires a [Tank upgrade](https://ocdoc.cil.li/item:tank_upgrade)) to fluid in the world or in an external tank on the specified side of the robot.
     */
    compareFluid(side:number):boolean

    /**
     * Extracts the specified amount of fluid from the world or a tank on the specified side of the robot. If no amount is specified, the robot will try to drain 1000mB. If the tank is unable to store the specified amount of fluid, the operation will fail (no fluid is lost in the process).
     */
    drain(side:number, count?: number):boolean

    /**
     * Fills the specified amount of fluid from the selected tank (requires a [Tank upgrade](https://ocdoc.cil.li/item:tank_upgrade)) into the world or a tank in front of the robot. If no amount is specified, the robot will try to fill the target tank with 1000mB of fluid. If there is not enough fluid to fill a block, or not enough space in the target tank, the operation will fail with no fluids lost.
     */
    fill(side:number, count?: number):boolean

    /**
     * Compares the block on the specified side of the robot with the item in the currently selected slot and returns whether they are the same or not. Blocks are considered identical if the type and metadata match; additional ItemStack information is not checked. Empty blocks are considered as air blocks, which cannot be compared to an empty inventory slot; the `detect()` function can be used to determine if there is a block in front of the robot. For blocks that drop a different item, the `compare()` method won't work (eg: Diamond block dropping diamond items); for these cases, use silk-touch to obtain a block for comparison.
     */
    compare(side:number, fuzzy?: boolean):boolean

    /**
     * Drops the specified number of items from the currently selected slot. Returns `true` if at least one item is dropped, `false` otherwise. If the block in front of the robot is an inventory, the robot will try to place the item into the inventory. If the inventory doesn't accept the item, the item is not dropped into the world (the operation will fail and return `false`). Robots themselves are considered blocks with an inventory, and items can be moved into them using the `drop()` function. The `drop()` function will not work on non-item inventories, such as fluid tanks (the `use()` function works for these cases).
     */
    drop(side:number, count?: number):boolean

    /**
     * Tries to pick up the specified number of items and place it in the selected slot. If the selected slot is occupied, items will be placed in the first available slot. Returns the number of items sucked else false.
     */
    suck(side:number, count?: number):boolean

}

/**
 * This component is provided by Floppy Disks or Hard Disk Drives in Unmanaged mode (for Managed mode, see Filesystem)
 * @noSelf
 */
interface ComponentDrive extends IComponent {
    /**
     * Read a single byte at the specified offset.
    */
    readByte(offset:number):number

    /**
     * Write a single byte to the specified offset.
    */
    writeByte(offset:number, value:number): void

    /**
     * Returns the size of a single sector on the drive, in bytes.
    */
    getSectorSize():number

    /**
     * Get the current label of the drive.
    */
    getLabel():string

    /**
     * Sets the label of the drive. Returns the new value, which may be truncated.
    */
    setLabel(value:string):string

    /**
     * Read the current contents of the specified sector.
    */
    readSector(sector:number):string

    /**
     * Write the specified contents to the specified sector.
    */
    writeSector(sector:number, value:string): void

    /**
     * Returns the number of platters in the drive.
    */
    getPlatterCount():number

    /**
     * Returns the total capacity of the drive, in bytes.
    */
    getCapacity():number


}

/**
 * @noSelf
 */
interface ComponentEEPROM extends IComponent {
    /**
     * Get the currently stored byte array.
    */
    get():string

    /**
     * Overwrite the currently stored byte array.
    */
    set(data:string): void

    /**
     * Get the label of the EEPROM.
    */
    getLabel():string

    /**
     * Set the label of the EEPROM.
    */
    setLabel(data:string): void

    /**
     * Gets the maximum storage capacity of the EEPROM.
    */
    getSize():number

    /**
     * Gets the maximum data storage capacity of the EEPROM.
    */
    getDataSize():number

    /**
     * Gets currently stored byte-array (usually the component address of the main boot device).
    */
    getData():string

    /**
     * Overwrites currently stored byte-array with specified string.
    */
    setData(data:string): void

    /**
     * Gets Checksum of data on EEPROM.
    */
    getChecksum():string

    /**
     * Makes the EEPROM Read-only if it isn't. This process cannot be reversed.
    */
    makeReadonly(checksum:string):boolean


}

/**
 * @noSelf
 */
interface ComponentExperience extends IComponent {
    /**
     * Gets the level of experience stored in the experience upgrade.
    */
    level():number
}

/**
 * @noSelf
 */
interface ComponentFileSystem extends IComponent {
    /**
     * The currently used capacity of the file system, in bytes.
    */
    spaceUsed():number

    /**
     * Opens a new file descriptor and returns its handle.
    */
    open(path:string, mode?: "r" | "w" | "rw"):number

    /**
     * Seeks in an open file descriptor with the specified handle. Returns the new pointer position.
    */
    seek(handle:number, whence:string, offset:number):number

    /**
     * Creates a directory at the specified absolute path in the file system. Creates parent directories, if necessary.
    */
    makeDirectory(path:string):boolean

    /**
     * Returns whether an object exists at the specified absolute path in the file system.
    */
    exists(path:string):boolean

    /**
     * Returns whether the file system is read-only.
    */
    isReadOnly():boolean

    /**
     * Writes the specified data to an open file descriptor with the specified handle.
    */
    write(handle:number, value:string):boolean

    /**
     * The overall capacity of the file system, in bytes.
    */
    spaceTotal():number

    /**
     * Returns whether the object at the specified absolute path in the file system is a directory.
    */
    isDirectory(path:string):boolean

    /**
     * Renames/moves an object from the first specified absolute path in the file system to the second.
    */
    rename(from:string, to:string):boolean

    /**
     * Returns a list of names of objects in the directory at the specified absolute path in the file system.
    */
    list(path:string): null | LuaIterable<string>

    /**
     * Returns the (real world) timestamp of when the object at the specified absolute path in the file system was modified.
    */
    lastModified(path:string):number

    /**
     * Get the current label of the file system.
    */
    getLabel():string

    /**
     * Removes the object at the specified absolute path in the file system.
    */
    remove(path:string):boolean

    /**
     * Closes an open file descriptor with the specified handle.
    */
    close(handle:number): void

    /**
     * Returns the size of the object at the specified absolute path in the file system.
    */
    size(path:string):number

    /**
     * Reads up to the specified amount of data from an open file descriptor with the specified handle. Returns nil when EOF is reached.
    */
    read(handle:number, count:number):string | null

    /**
     * Sets the label of the file system. Returns the new value, which may be truncated.
    */
    setLabel(value:string):string


}

/**
 * @noSelf
 */
interface ComponentGenerator extends IComponent {
    /**
     * The current number of fuel items still in the generator.
    */
    count(): number

    /**
     * Inserts up to the specified number of fuel items from the currently selected inventory slot into the generator's inventory. Returns `true` if at least one item was moved to the generator's inventory. Returns `false` and an error message otherwise.
     * Possible error messages are:
     * *“selected slot does not contain fuel”* if the selected slot has no item which can be burnt
     * *“different fuel type already queued”* if there is already another type of item in the generator
     * *“queue is full”* if there already are 64 items of that type in the generator
     *  - `remove(count?:  number): boolean`
     * Removes up to the specified number of fuel items from the generator and places them into the currently selected slot or the first free slot after it. Returns `true` if at least one item was removed from the generator's inventory, `false` otherwise.
    */
    insert(count?: number): boolean | LuaMultiReturn<[boolean, string?]>


}

/**
 * @noSelf
 */
interface ComponentGeolyzer extends IComponent {
    /**
     * Analyzes the density of an area at the specified relative coordinates `x`, `z` and `y`. This will return a list of hardness values for the blocks in the specified range. The coordinates are relative to the location of the geolyzer. Size of the analyzed area can be optionally given with parameters `w`, `d` and `h` which stand for width, depth and height, otherwise the area is assumed to be a single block at the specified offset.
     * Hardness values for blocks further away from the geolyzer are more noisy than those for blocks nearby. The exact formula for calculating how much a single value can deviate from the real hardness value of a specific block is: `euclidean distance to block * 1/33 * geolyzerNoise` where `geolyzerNoise` is a mod config option with a default value of `2`.
     * Table with multiple results is linear, but results represent an area in a 3D world. Area starts at a block defined by offset from the geolyzer block (`x`, `z` and `y`), and size (`w`, `d` and `h`) defines how many blocks it extends towards respectively: positive x, positive z and positive y coordinates. To figure out what elements in results table correspond to which coordinates, it should be interpreted as follows: first, values go towards positive x, then towards positive z, then towards positive y. In other words, if the result was a 3D nested table which got converted to a linear table, innermost table would contain values going in the positive x direction, middle table going in the positive z direction, and the outermost going in the positive y direction. See the code snippet at the bottom for an example.
     * **Note** that the offset is always absolute in terms of facing direction. In other words if the geolyzer is installed in a robot, offset won't be affected by the robot's facing.
     * **Note** that the amount of values returned is always 64, even if the scan volume is only part of that. If 10 blocks are scanned, the first 10 values in the result represent those blocks scanned. The remaining values in the result should be ignored.
    */
    scan(x:number, z:number, y?:number, w?:number, d?:number, h?:number, ignoreReplaceable?:boolean): LuaIterable<number>
    scan(x:number, z:number, y?:number, w?:number, d?:number, h?:number, options?: any): LuaIterable<number>
    scan(x:number, z:number, ignoreReplaceable?:boolean): LuaIterable<number>
    scan(x:number, z:number, options?: any): LuaIterable<number>

    /**
     * Get some information on a directly adjacent block. By default the returned table returns the string ID of the block (e.g. `minecraft:dirt`, metadata, hardness and some more information). Note that a single call to this consumes the same amount of energy a call to `scan` does!
     * This method can be disabled with the `misc.allowItemStackInspection` setting in the config.
    */
    analyze(side:number, options?:any): LuaIterable<string>

    /**
     * Stores an item stack representation of the block on the specified side of the geolyzer to the specified slot of a [database component](https://ocdoc.cil.li/component:database) with the specified address. Do not expect this to work (well) for every block in existence, in particular not for mod's blocks that are differentiated by NBT data (such as robots).
    */
    store(side:number, dbAddress:string, dbSlot:number):boolean

    /**
     * Same as `robot.detect` (from the robot component). Detects the block on the given side, relative to the robot, and returns whether or not the robot can move into the block, as well as a general description of the block.
     * **Returns:** `true` if the robot if whatever is in front of the robot would prevent him from moving forward (a block or an entity) (Note: Drones return `true` even if the block is `passable`), `false` otherwise. The second parameter describes what is in front in general and is one of either `entity`, `solid`, `replaceable`, `liquid`, `passable` or `air`.
    */
    detect(side:number):boolean, string

    /**
     * Returns whether there is a clear line of sight to the sky directly above. Transparent blocks, e.g. glass don't affect the line of sight
    */

    canSeeSky():boolean

    /**
     * Returns whether the sun is currently visible directly above. The result is affected by possible blocks blocking the line of sight directly above (which can be checked with `canSeeSky()`) and whether it's night or day
    */
    isSunVisible():boolean

}

/**
 * @noSelf
 */
interface ComponentGpu extends IComponent {
    /**
     * Tries to bind the GPU to a screen with the specified address. Returns `true` on success, `false` and an error message on failure. Resets the screen's settings if reset is 'true'. A GPU can only be bound to one screen at a time. All operations on it will work on the bound screen. If you wish to control multiple screens at once, you'll need to put more than one graphics card into your computer.
    */
    bind(address: string, reset?: boolean): true | LuaMultiReturn<[boolean | string]>

    /**
     * Get the address of the screen the GPU is bound to. Since 1.3.2.
    */
    getScreen():string

    /**
     * Gets the current background color. This background color is applied to all “pixels” that get changed by other operations.
     * Note that the returned number is either an RGB value in hexadecimal format, i.e. `0xRRGGBB`, or a palette index. The second returned value indicates which of the two it is (`true` for palette color, `false` for RGB value).
    */
    getBackground(): [number, boolean]

    /**
     * Sets the background color to apply to “pixels” modified by other operations from now on. The returned value is the old background color, as the actual value it was set to (i.e. not compressed to the color space currently set). The first value is the previous color as an RGB value. If the color was from the palette, the second value will be the index in the palette. Otherwise it will be `nil`. Note that the color is expected to be specified in hexadecimal RGB format, i.e. `0xRRGGBB`. This is to allow uniform color operations regardless of the color depth supported by the screen and GPU.
    */
    setBackground(color: number, isPaletteIndex?:  boolean): number | LuaMultiReturn<[number, number?]>

    /**
     * Like `getBackground`, but for the foreground color.
    */
    getForeground(): number | LuaMultiReturn<[number, boolean]>

    /**
     * Like `setBackground`, but for the foreground color.
    */
    setForeground(color: number, isPaletteIndex?:  boolean): number | LuaMultiReturn<[number, number?]>

    /**
     * Gets the RGB value of the color in the palette at the specified index.
    */
    getPaletteColor(index: number): number

    /**
     * Sets the RGB value of the color in the palette at the specified index.
    */
    setPaletteColor(index: number, value: number): number

    /**
     * Gets the maximum supported color depth supported by the GPU and the screen it is bound to (minimum of the two).
    */
    maxDepth(): number

    /**
     * The currently set color depth of the GPU/screen, in bits. Can be 1, 4 or 8.
    */
    getDepth(): number

    /**
     * Sets the color depth to use. Can be up to the maximum supported color depth. If a larger or invalid value is provided it will throw an error. Returns the old depth as one of the strings `OneBit`, `FourBit`, or `EightBit`.
    */
    setDepth(bit: number): string

    /**
     * Gets the maximum resolution supported by the GPU and the screen it is bound to (minimum of the two).
    */
    maxResolution(): LuaMultiReturn<[number, number]>

    /**
     * Gets the currently set resolution.
    */
    getResolution(): LuaMultiReturn<[number, number]>

    /**
     * Sets the specified resolution. Can be up to the maximum supported resolution. If a larger or invalid resolution is provided it will throw an error. Returns `true` if the resolution was changed (may return `false` if an attempt was made to set it to the same value it was set before), `false` otherwise.
    */
    setResolution(width: number, height: number): boolean

    /**
     * Get the current viewport resolution.
    */
    getViewport(): LuaMultiReturn<[number, number]>

    /**
     * Set the current viewport resolution. Returns `true` if it was changed (may return `false` if an attempt was made to set it to the same value it was set before), `false` otherwise. This makes it look like screen resolution is lower, but the actual resolution stays the same. Characters outside top-left corner of specified size are just hidden, and are intended for rendering or storing things off-screen and copying them to the visible area when needed. Changing resolution will change viewport to whole screen.
     * Gets the size in blocks of the screen the graphics card is bound to. For simple screens and robots this will be one by one.~~ Deprecated, use `screen.getAspectRatio()` instead.
    */
    setViewport(width: number, height: number): boolean

    /**
     * Gets the character currently being displayed at the specified coordinates. The second and third returned values are the fore- and background color, as hexvalues. If the colors are from the palette, the fourth and fifth values specify the palette index of the color, otherwise they are nil.
    */
    get(x: number, y: number): LuaMultiReturn<[string, number, number, number]> | LuaMultiReturn<[null, number]> | null

    /**
     * Writes a string to the screen, starting at the specified coordinates. The string will be copied to the screen's buffer directly, in a single row. This means even if the specified string contains line breaks, these will just be printed as special characters, the string will not be displayed over multiple lines. Returns `true` if the string was set to the buffer, `false` otherwise.
     * The optional fourth argument makes the specified text get printed vertically instead, if `true`.
    */
    set(x: number, y: number, value: string, vertical?: boolean): boolean

    /**
     * Copies a portion of the screens buffer to another location. The source rectangle is specified by the `x`, `y`, `width` and `height` parameters. The target rectangle is defined by `x + tx`, `y + ty`, `width` and `height`. Returns `true` on success, `false` otherwise.
    */
    copy(x: number, y: number, width: number, height: number, tx: number, ty: number): boolean

    /**
     * Fills a rectangle in the screen buffer with the specified character. The target rectangle is specified by the `x` and `y` coordinates and the rectangle's `width` and `height`. The fill character `char` must be a string of length one, i.e. a single character. Returns `true` on success, `false` otherwise.
     * Note that filling screens with spaces (` `) is usually less expensive, i.e. consumes less energy, because it is considered a “clear” operation (see config).
    */
    fill(x: number, y: number, width: number, height: number, char: string): boolean

    /**
     * Returns the index of the currently selected buffer. 0 is reserved for the screen, and may return 0 even when there is no screen
    */
    getActiveBuffer(): number

    /**
     * Sets the active buffer to `index`. 0 is reserved for the screen and can be set even when there is no screen. Returns nil for an invalid index (0 is valid even with no screen)
    */
    setActiveBuffer(index: number): number

    /**
     * Returns an array of all current page indexes (0 is not included in this list, that is reserved for the screen).
    */
    buffers(): LuaIterable<number>

    /**
     * Allocates a new buffer with dimensions width*heigh (gpu max resolution by default). Returns the index of this new buffer or error when there is not enough video memory. A buffer can be allocated even when there is no screen bound to this gpu. Index 0 is always reserved for the screen and thus the lowest possible index of an allocated buffer is always 1.
    */
    allocateBuffer(width?: number, height?: number): number

    /**
     * Removes buffer at `index` (default: current buffer index). Returns true if the buffer was removed. When you remove the currently selected buffer, the gpu automatically switches back to index 0 (reserved for a screen)
    */
    freeBuffer(index?: number): boolean

    /**
     * Removes all buffers, freeing all video memory. The buffer index is always 0 after this call.
    */
    freeAllBuffers(): void

    /**
     * Returns the total memory size of the gpu vram. This does not include the screen.
    */
    totalMemory(): number

    /**
     * Returns the total free memory not allocated to buffers. This does not include the screen.
    */
    freeMemory(): number

    /**
     * Returns the buffer size at `index` (default: current buffer index). Returns the screen resolution for index 0. Returns nil for invalid indexes
    */
    getBufferSize(index?: number): LuaMultiReturn<[number, number]>

    /**
     * Copy a region from buffer to buffer, screen to buffer, or buffer to screen. Defaults:
     * - dst = 0, the screen
     * - col, row = 1,1
     * - width, height = resolution of the destination buffer
     * - src = the current buffer
     * - fromCol, fromRow = 1,1 bitblt should preform very fast on repeated use. If the buffer is dirty there is an initial higher cost to sync the buffer with the destination object. If you have a large number of updates to make with frequent bitblts, consider making multiple and smaller buffers. If you plan to use a static buffer (one with few or no updatse), then a large buffer is just fine. Returns true on success
    */
    bitblt(dst?: number, col?: number, row?: number, width?: number, height?: number, src?: number, fromCol?: number, fromRow?: number): void

}

/**
 * @noSelf
 */
interface ComponentHologram extends IComponent {
    /**
     * Clears the hologram.
    */
    clear(): void

    /**
     * Returns the value at the specified position.
    */
    get(x:number, y:number, z:number):number

    /**
     * Set the value for the specified position.
    */
    set(x:number, y:number, z:number, value:number | boolean): void

    /**
     * Fills an interval in the specified column column with the specified value. Will overwrite only the voxels in the interval. If `minY` is omitted it defaults to 1. The two interval ends are inclusive.
     * *Note:* Before 1.3.3 there was no `minY` argument and all voxels below and including the specified height would be set, all voxels above would be unset.
    */
    fill(x:number, z:number, minY:number, maxY:number, value:number): void
    fill(x:number, z:number, maxY:number, value:number): void

    /**
     * Copies an area of columns by the specified translation.
    */
    copy(x:number, z:number, sx:number, sz:number, tx:number, tz:number): void

    /**
     * Returns the current render scale of the hologram.
    */
    getScale():number

    /**
     * Set the render scale. A larger scale consumes more energy. The minimum scale is 0.33, where the hologram will fit in a single block space, the maximum scale is 3, where the hologram will take up a 9x6x9 block space.
    */
    setScale(value:number): void

    /**
     * Return the current translation offset
    */
    getTranslation(): LuaMultiReturn<[number, number, number]>

    /**
     * Set the translation vector. The hologram display will be offset by this vector from its normal location. The maximum allowable translation is a function of tier. Units are the hologram's size, so the distance translated increases and decreases with scale as well
    */
    setTranslation(x:number, y:number, z:number): void
    /**
     * The color depth supported by the hologram.
    */
    maxDepth():number

    /**
     * Get the hex color defined for the specified value.
    */
    getPaletteColor(index:number):number

    /**
     * Set the hex color defined for the specified value.
    */
    setPaletteColor(index:number, value:number):number


}

/**
 * @noSelf
 */
interface ComponentInternet extends IComponent {
    /**
     * Returns whether TCP connections can be made (config setting).
    */
    isTcpEnabled():boolean

    /**
     * Returns whether HTTP requests can be made (config setting).
    */
    isHttpEnabled():boolean

    /**
     * Opens a new TCP connection. Returns the handle of the connection.
    */
    connect(address:string, port?: number): TcpSocket

    /**
     * Sends a new HTTP request. Returns the handle of the connection.
    */
    request(url:string, postData?: string, headers?: any): HttpResponse
}

/**
 * @noSelf
 */
interface TcpSocket {
    /**
     * Tries to read data from the socket stream. Returns the read byte array.
    */
    read(n? :number):string

    /**
     * Closes an open socket stream.
    */
    close(): void

    /**
     * Tries to write data to the socket stream. Returns the number of bytes written.
    */
    write(data:string):number

    /**
     * Ensures a socket is connected. Errors if the connection failed.
    */
    finishConnect():boolean

    /**
     * Returns the id for this socket
    */
    id():string

}

/**
 * @noSelf
 */
interface HttpResponse {

    /**
     * Tries to read data from the response. Returns the read byte array.
    */
    read(n? :number):string

    /**
     * Get response code, message and headers.
    */
    response(): LuaMultiReturn<[number, string, LuaTable<string, any>]>

    /**
     * Closes an open socket stream.
    */
    close(): void

    /**
     * Ensures a response is available. Errors if the connection failed.
    */
    finishConnect():boolean
}

/**
 * @noSelf
 */
interface ComponentInventoryController extends IComponent {
    /**
     * Returns the size of the inventory at the specified side. **side** - must be a valid side.
     * **Returns:** the size of the inventory, or `nil` followed by a description why this function failed (usually `no inventory`).
    */
    getInventorySize(side: number): number | LuaMultiReturn<[null, string?]>

    /**
     * Returns a table describing the item in the specified slot or nil. Deprecated for getting info about robot's own inventory, see `getStackInInternalSlot`.
     * @param side must be a valid side.
     * @param slot the slot to analyze. This does not check the inventory size and will consider slots outside the inventory bounds to be empty.
     * **Returns:** `nil` if the slot was empty (or outside the inventory's bounds), a table otherwise with the following information about the item in that slot:
     * - **damage**:number - the current damage value of the item.
     * - **maxDamage**:number - the maximum damage this item can have before it breaks.
     * - **size**:number - the current stack size of the item.
     * - **maxSize**:number - the maximum stack size of this item.
     * - **id**:number - the Minecraft id of the item. Note that this field is only included if `insertIdsInConverters=true` in the configs, and can vary between servers!
     * - **name**:string - the **untranslated** item name, which is an internal Minecraft value like `oc:item.FloppyDisk`
     * - **label**:string - the **translated** item name
     * - **hasTag**:boolean - whether or not the item has an NBT tag associated with it.
    */
    getStackInSlot(side:number, slot:number): ItemStack

    /**
     * Gets Itemstack description of item in specified or selected slot (if no input provided) of robot inventory.
    */
    getStackInInternalSlot(slot:number): ItemStack

    /**
     * Puts up to count items from the currently selected slot into the specified slot of the inventory at the specified side.
     * @param side a valid side.
     * @param slot the slot to drop the item into.
     * @param count how many items to transfer.
     * **Returns:** `true` if at least one item was moved, `false` and a secondary result that describes the error otherwise.
     * Note that the robot cannot drop items into it's own inventory, attempting to do so will cause this to throw an error. You need to use `robot.transferTo` from the [Robot API](https://ocdoc.cil.li/api:robot) to do so.
    */
    dropIntoSlot(side:number, slot:number, count?: number): boolean | LuaMultiReturn<[boolean, string?]>

    /**
     * Takes up to count items from the specified slot of the inventory at the specified side and puts them into the currently selected slot.
     * @param side a valid side.
     * @param slot the slot to take the item from.
     * @param count how many items to transfer.
     * **Returns:** `true` if at least one item was moved, `false` otherwise.
     * If the currently selected slot is occupied, then the items will be stacked with similar items in the robot's inventory or moved to the next free slot if available. If no slot is available this operation will fail.
     * Note that the robot cannot suck items from it's own inventory, attempting to do so will cause this to throw an error. You need to use `robot.transferTo` from the [Robot API](https://ocdoc.cil.li/api:robot) to do so.
    */
    suckFromSlot(side:number, slot:number, count?: number):boolean

    /**
     * Swaps the content of the robot's tool slot with the content of the currently selected inventory slot.
     * **Returns:** `true` if the items were swapped, `false` otherwise. This operation usually succeeds.
     * Note that you can put any kind of item into the robot's tool slot, not only tools, even items that the robot cannot use at all.
    */
    equip():boolean

    /**
     * Stores the Itemstack description of the item from the specified slot in an inventory on the specified side, into a specified database slot with the specified address.
    */
    store(side:number, slot:number, dbAddress:string, dbSlot:number):boolean

    /**
     * Stores Itemstack description of item in specified robot inventory slot into specified database slot with the specified database address.
    */
    storeInternal(slot:number, dbAddress:string, dBslot:number):boolean

    /**
     * Compare Itemstack description in specified slot with one in specified slot of a database with specified address. Returns **true** if items match.
    */
    compareToDatabase(slot:number, dBaddress:string, dBslot:number):boolean

    /**
     * Checks to see if Itemstack descriptions in specified slotA and slotB of inventory on specified side match. Returns **true** if identical.
    */
    compareStacks(side:number, slotA:number, slotB:number):boolean

    /**
     * Gets maximum number of items in specified slot in inventory on the specified side.
    */
    getSlotMaxStackSize(side:number, slot:number):number

    /**
     * Gets number of items in specified slot in inventory on the specified side.
    */
    getSlotStackSize(side:number, slot:number):number

    getAllStacks(side:number): ItemStackArray


}

/**
 * @noSelf
 */
interface ComponentLeash extends IComponent {
    /**
     * Tries to put an entity on the specified side of the device onto a leash.
    */
    leash(side:number):boolean

    /**
     * Unleashes all currently leashed entities.
    */
    unleash(): void
}

/**
 * @noSelf
 */
interface ComponentMicroController extends IComponent {
    /**
     * Set whether network messages are sent via the specified side.
    */
    setSideOpen(side: number, open: boolean): boolean

    /**
     * Starts the microcontroller. Returns true if the state changed.
    */
    start(): boolean

    /**
     * Returns whether the microcontroller is running.
    */
    isRunning(): boolean

    /**
     * Get whether network messages are sent via the specified side
    */
    isSideOpen(side: number): boolean

    /**
     * Returns the reason the microcontroller crashed, if applicable. Returns nil if no crash has occurred
    */
    lastError(): string

    /**
     * Stops the microcontroller. Returns true if the state changed
    */
    stop(): boolean
}

/**
 * @noSelf
 */
interface ComponentModem extends IComponent {
    /**
     * Returns whether this modem is capable of sending wireless messages.
    */
    isWireless(): boolean

    /**
     * Returns the maximum packet size for sending messages via network cards. Defaults to 8192. You can change this in the OpenComputers configuration file.
     * Every value in a message adds two bytes of overhead. (Even if there's only one value.)
     * Numbers add another 8 bytes, true/false/nil another 4 bytes, and strings exactly as many bytes as the string contains—though empty strings still count as one byte.
     * Examples:
     * - `"foo"` is a 5-byte packet; two bytes of overhead and a three byte string.
     * - `"currentStatus",300` is a 25-byte packet; four bytes overhead, a 13-byte string, and 8 bytes for a number.
    */
    maxPacketSize(): number

    /**
     * Returns whether the specified “port” is currently being listened on. Messages only trigger signals when they arrive on a port that is open.
    */
    isOpen(port: number): boolean

    /**
     * Opens the specified port number for listening. Returns `true` if the port was opened, `false` if it was already open. **Note: maximum port is 65535**
    */
    open(port: number): boolean

    /**
     * Closes the specified port (default: all ports). Returns true if ports were closed.
    */
    close(port?:  number): boolean

    /**
     * Sends a network message to the specified address. Returns `true` if the message was sent. This does *not* mean the message was received, only that it was sent. No port-sniffing for you.
     * Any additional arguments are passed along as data. These arguments must be basic types: nil, boolean, number and string values are supported, tables and functions are not. See [the serialization API](https://ocdoc.cil.li/api:serialization) for serialization of tables.
     * The number of additional arguments is limited. The default limit is 8. It can be changed in the OpenComputers configuration file, but this is *not* recommended; higher limits can allow relatively weak computers to break relatively strong ones with no defense possible, while lower limits will prevent some protocols from working.
    */
    send(address: string, port: number, ...message: any[]): boolean

    /**
     * Sends a broadcast message. This message is delivered to all reachable network cards. Returns `true` if the message was sent. Note that broadcast messages are *not* delivered to the modem that sent the message.
     * All additional arguments are passed along as data. See `send`.
    */
    broadcast(port: number, ...message: any[]): boolean

    /**
     * The current signal strength to apply when sending messages. *Wireless network cards only.*
    */
    getStrength(): number

    /**
     * Sets the signal strength. If this is set to a value larger than zero, sending a message will also generate a wireless message. The higher the signal strength the more energy is required to send messages, though. *Wireless network cards only.*
    */
    setStrength(value: number): number

    /**
     * Gets the current wake-up message. When the network card detects the wake message (a string in the first argument of a network packet), on any port and the machine is off, the machine is started. Works for robots, cases, servers, drones, and tablets. [Linked Cards](https://ocdoc.cil.li/component:tunnel) provide this same functionality.
    */
    getWakeMessage():string

    /**
     * Sets the wake-up message to the specified **string**. The message matching can be fuzzy (default is false). A fuzzy match ignores additional trailing arguments in the network packet.
    */
    setWakeMessage(message: string, fuzzy?:  boolean):string


}

/**
 * @noSelf
 */
interface ComponentMotionSensor extends IComponent {
    /**
     * Gets the current sensitivity of the sensor, i.e. at which speed threshold of distance / second it triggers.
    */
    getSensitivity(): number

    /**
     * Sets the sensor's sensitivity to the specified value, returns the old value.
    */
    setSensitivity(value: number): number
}

/**
 * @noSelf
 */
interface ComponentNavigation extends IComponent {
    /**
     * Gets the current relative position of the robot. This is the position relative to the center of the map item that was used to craft the upgrade. Note that the upgrade can be re-crafted with another map to change it's point of reference. Returns `nil` and the string `out of range` if the robot is too far away from the point of reference (i.e. when it is out of bounds of the map that was used to craft the upgrade).
    */
    getPosition(): LuaMultiReturn<[number, number, number]> | LuaMultiReturn<[null, string]>

    /**
     * Gets the current facing of the robot, as one of the `sides` constants.
    */
    getFacing(): number

    /**
     * Gets the effective range of the upgrade. If the absolute value of the relative X or Z coordinate becomes larger than this, `getPosition()` will fail.
    */
    getRange(): number

    /**
     * Finds all [waypoint blocks](https://ocdoc.cil.li/block:waypoint) within the specified range.
     * This returns a table that contains other tables. The top table has only numbered indices corresponding to each detected beacon. In each of this entries is another table, each row various aspects of the specified beacon: “position”, “redstone”, “label”.
    */
    findWaypoints(range: number): LuaIterable<NavigationWaypoint>

}

/**
 * @noSelf
 */
interface NavigationWaypoint {
    position: LuaIterable<number>
    redstone: number
    label: string
}

/**
 * @noSelf
 */
interface ComponentNetSplitter extends IComponent {
    /**
     * Open the side, returns true if it changed to open.
    */
    open(side: number):number

    /**
     * Close the side, returns true if it changed to close.
    */
    close():number

    /**
     * Returns current open/close state of all sides in an array, indexed by direction.
    */
    getSides(): LuaPairsIterable<number, boolean>

    /**
     * set open state (true/false) of all sides in an array; index by direction. Returns previous states.
    */
    setSides(settings: {value: boolean}): LuaPairsIterable<number, boolean>
}

/**
 * @noSelf
 */
interface ComponentPiston extends IComponent {
    /**
     * Tries to push the block in front of the container of the upgrade.
    */
    push(side: number):boolean

}

/**
 * @noSelf
 */
interface ComponentRedstone extends IComponent {
    /**
     * Get the comparator input on the specified side.
    */
    getComparatorInput(side:number):number

    /**
     * Get the wireless redstone input.
     * *Added in OC 1.3. Only available on tier two redstone cards.*
    */
    getWirelessInput():number

    /**
     * Get the wireless redstone output.
     * *Added in OC 1.3. Only available on tier two redstone cards.*
    */
    getWirelessOutput():boolean

    /**
     * Set the wireless redstone output.
     * *Added in OC 1.3. Only available on tier two redstone cards.*
    */
    setWirelessOutput(value:boolean):boolean

    /**
     * Get the currently set wireless redstone frequency.
     * *Added in OC 1.3. Only available on tier two redstone cards.*
    */
    getWirelessFrequency():number

    /**
     * Set the wireless redstone frequency to use.
     * *Added in OC 1.3. Only available on tier two redstone cards.*
    */
    setWirelessFrequency(frequency:number):number

    /**
     * Gets the current wake-up threshold.
    */
    getWakeThreshold():number

    /**
     * Sets the wake-up threshold to the specified number.
    */
    setWakeThreshold(threshold:number):number

    /**
     * 
    */
    setOutput(side: number, value: number): number

    /**
     * Sets the strength of the redstone signal to emit. Returns the **old** value. This can be an arbitrarily large number for mods that support this. The first variant of this method takes a [side](https://ocdoc.cil.li/api:sides) and the redstone strength to apply to just that side. `setOutput(values)` allows you to set the redstone strength of all sides (or a subset of sides) in a single call.
    */
    setOutput(values: LuaPairsIterable<number, number>): LuaPairsIterable<number, number>

    /**
     * 
    */
    getBundledInput(side: number, color: number): number

    /**
     * 
    */
    getBundledInput(side: number): LuaPairsIterable<number, number>

    /**
     * Like `getInput`, but for bundled input, reading the value for the channel with the specified [API/Colors](https://ocdoc.cil.li/api:colors).
     * *As of OC 1.3: only available on a tier two redstone card.* `getBundledInput(side, color)` returns the strength of the incoming redstone value on the specified side on the specified color channel. `getBundledInput(side)` returns a table (Map[Int, Int] structure) of redstone values on the specified side in a bundled pack, indexed by color.
    */
    getBundledInput(): LuaPairsIterable<number, number>

    /**
     * returns all redstone values, of all sides and all colors. It is a Map[Int, Map[Int, Int]] structure. The top level keys are in [0, 5] range, values of [sides](https://ocdoc.cil.li/api:sides) (keep in mind sides.bottom is zero). The child map of each side is the same data structure returned by `getBundledInput(side)`.
    */
    getBundledInput(): void

    /**
     * 
    */
    getBundledOutput(side: number, color: number): number

    /**
     * 
    */
    getBundledOutput(side: number): LuaPairsIterable<number, number>

    /**
     * Like `getOutput`, but for bundled output, getting the values previously set that the device is emitting.
     * *As of OC 1.3: only available on a tier two redstone card.*
    */
    getBundledOutput(): LuaPairsIterable<number, number>

    /**
     * Like `setOutput`, but for bundled output, setting the value for the channel with the specified [API/Colors](https://ocdoc.cil.li/api:colors). Returns the previous values set. `setBundledOutput(side, values)` sets a pack of color-indexed redstone values, [0, 15]. `colors.white` is zero. The values table doesn't have to be contiguous, and values omitted are left unchanged. `setBundledOutput(values)` allows you to set redstone levels for any side and any color in a single api call.
     * *As of OC 1.3: only available on a tier two redstone card.*
    */
    setBundledOutput(side: number, color: number, value: number): number

    /**
     * 
    */
    getOutput(side: number): number

    /**
     * Gets the currently set output on the specified side, or the set value of all sides if called with no arguments
    */
    getOutput(): LuaPairsIterable<number, number>

    /**
     * 
    */
    getInput(side: number): number

    /**
     * Returns current incoming (non-bundled) redstone values. `getInput(side)` returns the redstone level from the specified [side](https://ocdoc.cil.li/api:sides). `getInput()` returns a table of redstone levels from all sides.
     * Note that the table returned is zero based. That is because the keys of the table are the ordinal values of the sides, and `sides.bottom` is 0.
     * Note also that the side is relative to the computer's orientation, i.e. `sides.south` is *in front of the computer*, not south in the world. Likewise, `sides.left` is to the left of the computer, so when you look at the computer's front, it'll be to your right.
     * If you use mods such as RedLogic the input may exceed the vanilla values of [0, 15].
    */
    getInput(): LuaPairsIterable<number, number>
}

/**
 * @noSelf
 */
interface ComponentRobot extends IComponent, InternalInventory, ExternalInventory {
    /**
     * Get the durability of the currently equipped tool.
    */
    durability():number

    /**
     * Move in the specified direction. Valid movement sides are: front, back, top, bottom (see [Sides](https://ocdoc.cil.li/api:sides)).
    */
    move(direction:number):boolean

    /**
     * Rotate in the specified direction.
    */
    turn(clockwise:boolean):boolean

    /**
     * Get the name of the robot.
    */
    name():string

    /**
     * Lets the robot use the currently equipped item in the tool slot against the block or space directly in front of the robot. Returns `true` if successful (may take time depending on block being interacted with - e.g.. Obsidian takes time to mine). Returns `false` if the operation fails with a description of why it failed.
    */
    swing(side:number): LuaMultiReturn<[boolean, string?]>

    /**
     * Attempts to use the item currently equipped in the tool slot in the same way as if the player would make a right-click.
     * @param side if given the robot will try to 'right-click' only on the surface as specified by side, otherwise the robot will try all possible sides. See the [Sides API](https://ocdoc.cil.li/api:sides) for a list of possible sides.
     * @param sneaky if set to `true` the robot will simulate a sneak-right-click (like if the player would be using shift during a right-click). Some items (like buckets) will behave differently if this is set to true.
     * @param duration how long the item is used. This is useful when using charging items like a bow.
     * **Returns:** true if the robot could interact with the block or entity in front of it, false otherwise. If successful the secondary parameter describes what the robot interacted with and will be one of 'block*activated', 'item*placed', 'item*interacted' or 'item*used'.
     * This function has a very broad use as the robot can simulate right-clicks with most items. The only difference to players is that the robot cannot use items that specifically require the user to be an entity as the robot is a block. So drinking potions, eating food or throwing an ender pearl will fail.
     * This functions secondary return value can be used to determine what the result of the right-click caused. Which of the item results is returned is not always obvious and requires some testing beforehand. Also note that while robots are not affected by harmful potions they can be destroyed by explosions, so be careful when you place, throw or activate any form of explosives with this function. Possible values for the second return value:
     * - `block_activated` - a block was activated (like levers, switches or doors).
     * - `item_interacted` - the equipped tool interacted with the world, for example sheers when used on a sheep.
     * - `item_placed` - something was placed into the world. This is not only caused by placeable blocks, but as well by items that cause blocks or entities to appear in the world (like flint and stone or mob eggs).
     * - `item_used` - the equipped was activated, like a splash-potion.
     * - `air` - the equipped item requires a target but there was none. Note that if your robot has an Angel upgrade, this will never be returned, however some actions might still cause no effect.
    */
    use(side: number, sneaky?:  boolean, duration?:  number): LuaMultiReturn<[boolean, string?]>

    /**
     * Tries to place the block in the currently selected inventory slot on the specified side of the robot (if the side is supported). If **sneaky** is set to `true`, the robot will simulate a sneak-placement (shift-click). Returns `true` if successfully placed. Returns `false` if the operation fails. If an unsupported value is provided as a parameter, the operation will fail with a description of why it failed.
    */
    place(side: number, sneaky?:  boolean): LuaMultiReturn<[boolean, string?]>

    /**
     * Get the current color of the activity(robot) or flap(drone) light as an integer encoded RGB value (0xRRGGBB).
    */
    getLightColor():number

    /**
     * Set the color of the activity(robot) or flap(drone) light to the specified integer encoded RGB value (0xRRGGBB).
    */
    setLightColor(value:number):number

}

/**
 * @noSelf
 */
interface ComponentScreen extends IComponent {
    /**
     * Returns whether the screen is currently on.
    */
    isOn():boolean

    /**
     * Turns the screen on. Returns true if it was off.
    */
    turnOn():boolean

    /**
     * Turns off the screen. Returns true if it was on.
    */
    turnOff():boolean

    /**
     * The aspect ratio of the screen. For multi-block screens this is the number of blocks, horizontal and vertical.
    */
    getAspectRatio(): LuaMultiReturn<[number, number]>

    /**
     * The list of keyboards attached to the screen.
    */
    getKeyboards(): LuaIterable<string>

    /**
     * Set whether to use high-precision mode (sub-pixel mouse event position).
     * *Requires Screen (Tier 3).*
    */
    setPrecise(enabled:boolean):boolean

    /**
     * Check whether high-precision mode is enabled (sub-pixel mouse event position).
     * *Requires Screen (Tier 3).*
    */
    isPrecise():boolean

    /**
     * Sets Inverted Touch mode (Sneak-activate opens GUI if set to true).
    */
    setTouchModeInverted(enabled:boolean):boolean

    /**
     * Check to see if Inverted Touch mode is enabled (Sneak-activate opens GUI is set to true).
    */
    isTouchModeInverted():boolean


}

/**
 * @noSelf
 */
interface ComponentSign extends IComponent {
    /**
     * Gets the text currently displayed on the sign in front of the robot, or `nil` and an error message if there is no sign in front of the robot.
    */
    getValue(): string | LuaMultiReturn<[null, string]>

    /**
     * Sets the text of the sign in front of the robot. Returns the new text on the sign (which may be a truncated version of the passed argument) or `nil` and an error message if there is no sign in front of the robot.
    */
    setValue(value: string): string | LuaMultiReturn<[null, string]>

}

/**
 * @noSelf
 */
interface ComponentTankController extends IComponent {
    /**
     * Get the capacity of the tank on the specified side of the robot. Back refers to the robot's own selected tank.
    */
    getTankCapacity(side:number):number | LuaMultiReturn<[null, string?]>

    /**
     * Gets amount of fluid in tank on specified side.
     */
    getTankLevel(side:number):number | LuaMultiReturn<[null, string?]>

    /**
     * Get a description of the fluid in the the tank on the specified side of the robot. **Note:** sides.back deprecated, use `getFluidInInternalTank()`
     */
    getFluidInTank(side:number): LuaIterable<Fluid>

    /**
     * Get a description of fluid in the specified or selected slot of robot inventory
     */
    getFluidInInternalTank(slot: number): LuaIterable<Fluid>

    /**
     * Transfers fluid from a tank in the selected inventory slot to the selected tank. If the amount of fluid that would be generated from the item is too large to fit into the tank (for example buckets will usually generate 1000) nothing will happen, that is no fluid is lost.
     */
    drain(amount?: number):boolean

    /**
     * Transfers fluid from the selected tank to a tank in the selected inventory slot. If the specified amount is too low (for example for buckets the minimum amount will usually be 1000) nothing will happen, that is no fluid is lost.
     */
    fill(amount?: number):boolean

    /**
     * Gets capacity of tank in specified or selected slot of the robot inventory.
     */
    getTankCapacityInSlot(slot:number):number

    /**
     * Gets amount of fluid tank item in specified or selected slot of the robot inventory.
     */
    getTankLevelInSlot(slot:number):number

    /**
     * Gets description of fluid in tank item in the specified or selected slot of the robot inventory.
     */
    getFluidInTankInSlot(slot:number): Fluid

}

/**
 * @noSelf
 */
interface ComponentTractorBeam extends IComponent {
    /**
     * Tries to pick up a random item in the robots' vicinity (a 9×9 area with the robot at its center).
    */
    suck(): boolean
}

/**
 * @noSelf
 */
interface Fluid {
    /**
     * Amount of the fluid. Unit: mb
     */
    amount: number
    /**
     * Does the fluid has custom NBT
     */
    hasTag: boolean
    /**
     * Maxium fluid amount that it can stcak up to
     */
    capacity: number
    /**
     * Display name of the fluid (Server-side)
     */
    label: string
    /**
     * Namespace and the ID of the fluid
     */
    name: string
}

/**
 * @noSelf
 */
interface ComponentTransposer extends IComponent {
    /**
     * Transfer some fluids between two fluid handlers (pipes or tanks, etc). `sourceSide` is the side pulled from and `sinkSide` is the side transferred to. The side value is a integral value representing the cardinal directions (east, west, south, north), up, and down. The `sides` library has these values for convenience. `count` is the number of millibuckets to transfers. Returns true and the number of millibuckets transfered on success, or false and an error message on failure.
    */
    transferFluid(sourceSide:number, sinkSide:number, count:number): [boolean, number]
    
    /**
     * Store an item stack description in the specified slot of the database with the specified address.
    */
    store(side:number, slot:number, dbAddress:string, dbSlot:number):boolean
    
    /**
     * Compare an item in the specified slot in the inventory on the specified side with one in the database with the specified address.
    */
    compareStackToDatabase(side:number, slot:number, dbAddress:string, dbSlot:number, checkNBT:boolean):boolean
    
    /**
     * Get number of items in the specified slot of the inventory on the specified side of the device.
    */
    getSlotStackSize(side:number, slot:number):number
    
    /**
     * Get the maximum number of items in the specified slot of the inventory on the specified side of the device.
    */
    getSlotMaxStackSize(side:number, slot:number):number
    
    /**
     * Get the the name of the inventory on the specified side of the device.
    */
    getInventoryName(side:number):string
    
    /**
     * Get the number of slots in the inventory on the specified side of the device.
    */
    getInventorySize(side:number):number
    
    /**
     * Get a description of the fluid in the the specified tank on the specified side.
    */
    getFluidInTank(side:number , tank:number): LuaIterable<Fluid>
    
    /**
     * Get the amount of fluid in the specified tank on the specified side.
    */
    getTankLevel(side:number , tank:number):number
    
    /**
     * Transfer some items between two inventories.
    */
    transferItem(sourceSide:number, sinkSide:number, count:number, sourceSlot:number, sinkSlot:number):number
    
    /**
     * Get whether the items in the two specified slots of the inventory on the specified side of the device are of the same type.
    */
    compareStacks(side:number, slotA:number, slotB:number, checkNBT:boolean):boolean
    
    /**
     * Get whether the items in the two specified slots of the inventory on the specified side of the device are equivalent (have shared OreDictionary IDs).
    */
    areStacksEquivalent(side:number, slotA:number, slotB:number):boolean
    
    /**
     * Get the number of tanks available on the specified side.
    */
    getTankCount(side:number):number
    
    /**
     * Get a description of the stack in the inventory on the specified side of the device.
    */
    getStackInSlot(side:number, slot:number):ItemStack
    
    /**
     * Get the capacity of the specified tank on the specified side.
    */
    getTankCapacity(side:number , tank:number):number
    
    /**
     * Get a description of all stacks in the inventory on the specified side of the device.
     * The return value is callable. Calling it will return a table describing the stack in the inventory or nothing if the iterator reaches end.
     * The return value provides the followings callbacks:
    */
    getAllStacks(side:number): ItemStackArray
    
}

/**
 * @noSelf
 */
interface ItemStackArray extends LuaIterable<ItemStack> {
    /**
     * Returns ALL the stack in the this.array. Memory intensive.
    */
    getAll(): LuaIterable<ItemStack>

    /**
     * Returns the number of elements in the this.array.
    */
    count():number

    /**
     * Reset the iterator index so that the next call will return the first element.
    */
    reset(): void
}

/**
 * @noSelf
 */
interface ComponentTunnel extends IComponent {
    /**
     * Sends the specified data to the card this one is linked to.
    */
    send(...data: any[]): void
    
    /**
     * Gets the maximum packet size (config setting).
    */
    maxPacketSize():number
    
    /**
     * Gets the tunnel address of the link card. This is also available in `linkChannel` using an inventory controller and getting the stack from an inventory slot.
    */
    getChannel():string
    
    /**
     * Gets the current wake-up message. When the network card detects the wake message (a string in the first argument of a network packet), on any port and the machine is off, the machine is started. This is the same functionality also provided by robots, cases, servers, drones, and tablets.
    */
    getWakeMessage():string
    
    /**
     * Sets the wake-up message to the specified **string**. The message matching can be fuzzy (default is false). A fuzzy match ignores additional trailing arguments in the network packet.
    */
    setWakeMessage(message: string, fuzzy?:  boolean):string
    

}

/**
 * @noSelf
 */
interface ComponentWorldSensor extends IComponent {
    /**
     * Gets whether the world the device is currently in has the specified gas.
    */
    isGasPresent(gas:string):boolean
    
    /**
     * Gets the gravity of the world that the device is currently in.
    */
    getGravity():number
    
    /**
     * Gets whether the world that the device is in has a breathable atmosphere.
    */
    hasBreathableAtmosphere():boolean
    
    /**
     * Gets the wind level of the world that the device is currently in.
    */
    getWindLevel():number
}
/////////////////////////////////////////// Integrations /////////////////////////////////////////////////////
// This part is not all integrations that it supports! Feel free to add mods that supports OC2              //
// or OC2 supports.                                                                                         //
//                                                                                                          //
// Tested Minecraft Version: 1.12.2                                                                         //
//                                                                                                          //
// List of integrations:                                                                                    //
// https://github.com/MightyPirates/OpenComputers/blob/master-MC1.12/src/main/scala/li/cil/oc/integration   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////// Arguments Types ///////////////////
interface ItemStackFilter {
    name?: string,
    damage?: number,
    tag?: string
}

/////////////////// Minecraft (Provided by OpenComputer) ///////////////////
/**
 * @noSelf
 */
interface ComponentMinecraftBeacon extends IComponent {
    /**
     * Get the number of levels for this beacon.
     */
    getLevels(): number
    /**
     * Get the name of the active primary effect.
     */
    getPrimaryEffect(): string
    /** 
     * Get the name of the active secondary effect.
    */
    getSecondaryEffect(): string
}

/**
 * @noSelf
 */
interface ComponentMinecraftBrewingStand extends IComponent {
    /**
     * Get the number of ticks remaining of the current brewing operation.
     */
    getBrewTime(): number
}

/**
 * @noSelf
 */
interface ComponentMinecraftCommandBlock extends IComponent {

    /**
     * Get the command currently set in this command block.
     */
    getCommand(): string

    /**
     * Set the specified command for the command block.
     */
    setCommand(value: string): void

    /**
     * Execute the currently set command. This has slight delay to allow the command block to properly update.
     * @return Success count and output text. If it has failed before the execution of command, it will return null and a reason text
     */
    executeCommand(): LuaMultiReturn<[number, string]>
}

/**
 * @noSelf
 */
interface ComponentMinecraftComparator extends IComponent {
    /**
     * Get the strength of the comparators output signal.
     */
    getOutputSignal(): number
}

/**
 * @noSelf
 */
interface ComponentMinecraftFluidHandler extends IComponent {
    getInfo(): any
    // TODO: Returns a typed info
}

/**
 * @noSelf
 */
interface ComponentMinecraftFluidTank extends IComponent {
    getInfo(): any
    // TODO: Returns a typed info
}

/**
 * @noSelf
 */
interface ComponentMinecraftFurnace extends IComponent {
    /**
     * The number of ticks that the furnace will keep burning from the last consumed fuel.
     */
    getBurnTime(): number
    /**
     * The number of ticks that the currently burning fuel lasts in total.
     */
    getCurrentItemBurnTime(): number
    /**
     * The number of ticks that the current item has been cooking for.
     */
    getCookTime(): number
    /**
     * The number of ticks that the current item needs to cook.
     */
    getTotalCookTime(): number
    /**
     * Get whether the furnace is currently active.
     */
    isBurning(): boolean
}

/**
 * @noSelf
 */
interface ComponentMinecraftInventory extends IComponent {
    /**
     * Get the name of this inventory.
     */
    getInventoryName(): string

    /**
     * Returns the size of the inventory at the specified side. **side** - must be a valid side.
     * **Returns:** the size of the inventory, or `nil` followed by a description why this function failed (usually `no inventory`).
    */
     getInventorySize(): number

     /**
      * Returns a table describing the item in the specified slot or nil. Deprecated for getting info about robot's own inventory, see `getStackInInternalSlot`.
      * @param slot the slot to analyze. This does not check the inventory size and will consider slots outside the inventory bounds to be empty.
      * **Returns:** `nil` if the slot was empty (or outside the inventory's bounds), a table otherwise with the following information about the item in that slot:
      * - **damage**:number - the current damage value of the item.
      * - **maxDamage**:number - the maximum damage this item can have before it breaks.
      * - **size**:number - the current stack size of the item.
      * - **maxSize**:number - the maximum stack size of this item.
      * - **id**:number - the Minecraft id of the item. Note that this field is only included if `insertIdsInConverters=true` in the configs, and can vary between servers!
      * - **name**:string - the **untranslated** item name, which is an internal Minecraft value like `oc:item.FloppyDisk`
      * - **label**:string - the **translated** item name
      * - **hasTag**:boolean - whether or not the item has an NBT tag associated with it.
     */
     getStackInSlot(slot:number): ItemStack
 
 
 
     /**
      * Checks to see if Itemstack descriptions in specified slotA and slotB of inventory on specified side match. Returns **true** if identical.
     */
     compareStacks(slotA:number, slotB:number):boolean
 
     /**
      * Gets maximum number of items in specified slot in inventory on the specified side.
     */
     getSlotMaxStackSize(slot:number):number
 
     /**
      * Gets number of items in specified slot in inventory on the specified side.
     */
     getSlotStackSize(slot:number):number
 
     /**
      * Get a list of descriptions for all item stacks in this inventory.
      */
     getAllStacks(): ItemStackArray

     /**
      * Move up to the specified number of items from the first specified slot to the second.
      */
     transferStack(slotA: number, slotB: number, count?: number): boolean
}

/**
 * @noSelf
 */
interface ComponentMinecraftMobSpawner extends IComponent {
    /**
     * Get the name of the entity that is being spawned by this spawner.
     */
    getSpawningMobName(): string
}

/**
 * @noSelf
 */
interface ComponentMinecraftNoteBlock extends IComponent {
    /**
     * Get the currently set pitch on this note block.
     */
    getPitch(): number
    /**
     * Set the pitch for this note block. Must be in the interval [1, 25].
     */
    setPitch(pitch: number): void
    /**
     * Triggers the note block if possible. Allows setting the pitch for to save a tick.
     */
    trigger(pitch?: number): boolean
}

/**
 * @noSelf
 */
interface ComponentMinecraftRecordPlayer extends IComponent {
    /**
     * Get the title of the record currently in the jukebox.
     */
    getRecord(): string | null
    /**
     * Start playing the record currently in the jukebox.
     */
    play(): void
    /**
     * Stop playing the record currently in the jukebox.
     */
    stop(): void
}

/////////////////// OpenGlasses (Provided by OpenGlasses) ///////////////////

/////////////// Modifiers ///////////////
/** 
 * @noSelf 
 * @see https://github.com/Starchasers/OCGlasses/wiki/WidgetModifiers
*/
interface OGEasing {
    set(type: OGEasingType, typeIO: OGEasingTypeIO, duration: number, min: number, max: number, mode: OGEasingMode): boolean

    get(): {
        type: OGEasingType,
        typeIO: OGEasingTypeIO,
        duration: number,
        min: number,
        max: number,
        mode: OGEasingMode,
        progress: number
    }

    remove(): boolean | InternalError
}
/** @noSelf */
interface OGModifier<T, V extends string> {
    /**
     * Removes the widget modifier
     */
    remove(): boolean | InternalError

    /**
     * Returns the modifier type
     */
    type(): string

    /**
     * Returns the current vlaues
     */
    get(): T

    /**
     * Get all easings. The key would be the variable that's being animated, and the value would be the easing object
     */
    easings(): LuaTable<V, OGEasing>
}

///// Impls /////

/** @noSelf */
interface OGModifierColorData { r: number, g: number, b: number, alpha: number }
/** @noSelf */
interface OGModifierColor extends OGModifier<OGModifierColorData, "r" | "g" | "b" | "alpha"> {
    /**
     * Sets the new value
     */
    set(red: number, green: number, blue: number, alpha?: number): boolean
}

/** @noSelf */
interface OGModifierRotateData { deg: number, x: number, y: number, z: number }
/** @noSelf */
interface OGModifierRotate extends OGModifier<OGModifierRotateData, "deg" | "x" | "y" | "z"> {
    /**
     * Sets the new value
     */
    set(deg: number, x: number, y: number, z: number): boolean
}

/** @noSelf */
interface OGModifierScaleData { x: number, y: number, z: number }
/** @noSelf */
interface OGModifierScale extends OGModifier<OGModifierScaleData, "x" | "y" | "z"> {
    /**
     * Sets the new value
     */
    set(x: number, y: number, z: number): boolean
}

/** @noSelf */
interface OGModifierTranslateData { x: number, y: number, z: number }
/** @noSelf */
interface OGModifierTranslate extends OGModifier<OGModifierTranslateData, "x" | "y" | "z"> {
    /**
     * Sets the new value
     */
    set(x: number, y: number, z: number): boolean
}

/** @noSelf */
interface OGModifierAutoTranslateData { x: number, y: number }
/** @noSelf */
interface OGModifierAutoTranslate extends OGModifier<OGModifierAutoTranslateData, "x" | "y"> {
    /**
     * Sets the new value
     */
    set(x: number, y: number): boolean
}

/////////////// Widget Attributes ///////////////

/**
 * ### Light
 * > ⚠️ Requires daylight detector
 * `IS_LIGHTLEVEL_MIN_[x = 0-15]` - If the light level is at least *x*
 * `IS_LIGHTLEVEL_MAX_[x = 0-15]` - If the light level is at less than *x*
 * 
 * ### Weather
 * > ⚠️ Requires Tank Upgrade
 * `IS_WEATHER_[w = "RAIN" | "CLEAR"]` - If the weather is currently *w*
 * 
 * ### Swimming
 * > ⚠️ Requires Motion Upgrade
 * `IS[c = "_NOT" | ""]_SWIMMING` - If the player is currently *c* swimming
 * 
 * ### Sneaking
 * > ⚠️ Requires Motion Upgrade
 * `IS[c = "_NOT" | ""]_SNEAKING` - If the player is currently *c* sneaking
 * 
 * ### Overlay
 * `IS[c = "IN" | ""]ACTIVE` - If the overlay is currently *c*active
 * 
 * ### Entity Detector
 * > ⚠️ Can be only applied if it's entity tracker
 * `IS_FOCUSED_ENTITY` - If the player is aiming at the entity (can hit it by just left clicking)
 * `IS_FOCUSED_BLOCK` - if the player is aiming at the block
 * `IS_LIVING` - If the target entity is [living entity](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/LivingEntity.html)
 * `IS_PLAYER` - If the target entity is player
 * `IS_NEUTRAL` - If the target entity is neutral entity
 * `IS_HOSTILE` - If the target entity is hostile entity
 * `IS_ITEM` - If the target entity is item
 */
type ConditionType = "IS_WEATHER_RAIN" | "IS_WEATHER_CLEAR" | "IS_SWIMMING" | "IS_NOT_SWIMMING" | "IS_SNEAKING" | "IS_NOT_SNEAKING" | "OVERLAY_ACTIVE" | "OVERLAY_INACTIVE" | "IS_LIGHTLEVEL_MIN_0" | "IS_LIGHTLEVEL_MIN_1" | "IS_LIGHTLEVEL_MIN_2" | "IS_LIGHTLEVEL_MIN_3" | "IS_LIGHTLEVEL_MIN_4" | "IS_LIGHTLEVEL_MIN_5" | "IS_LIGHTLEVEL_MIN_6" | "IS_LIGHTLEVEL_MIN_7" | "IS_LIGHTLEVEL_MIN_8" | "IS_LIGHTLEVEL_MIN_9" | "IS_LIGHTLEVEL_MIN_10" | "IS_LIGHTLEVEL_MIN_11" | "IS_LIGHTLEVEL_MIN_12" | "IS_LIGHTLEVEL_MIN_13" | "IS_LIGHTLEVEL_MIN_14" | "IS_LIGHTLEVEL_MIN_15" | "IS_LIGHTLEVEL_MAX_0" | "IS_LIGHTLEVEL_MAX_1" | "IS_LIGHTLEVEL_MAX_2" | "IS_LIGHTLEVEL_MAX_3" | "IS_LIGHTLEVEL_MAX_4" | "IS_LIGHTLEVEL_MAX_5" | "IS_LIGHTLEVEL_MAX_6" | "IS_LIGHTLEVEL_MAX_7" | "IS_LIGHTLEVEL_MAX_8" | "IS_LIGHTLEVEL_MAX_9" | "IS_LIGHTLEVEL_MAX_10" | "IS_LIGHTLEVEL_MAX_11" | "IS_LIGHTLEVEL_MAX_12" | "IS_LIGHTLEVEL_MAX_13" | "IS_LIGHTLEVEL_MAX_14" | "IS_LIGHTLEVEL_MAX_15" | "IS_FOCUSED_ENTITY" | "IS_FOCUSED_BLOCK" | "IS_LIVING" | "IS_HOSTILE" | "IS_NEUTRAL" | "IS_PLAYER" | "IS_ITEM"

/**
 * Easings IO Type. For preview, you can go [`easings.net`](https://easings.net/)
 */
type OGEasingTypeIO = "IN" | "OUT" | "INOUT"
/**
 * Easings Function. For preview, you can go [`easings.net`](https://easings.net/)
 */
type OGEasingType = "BACK" | "BOUNCE" | "CIRC" | "CUBIC" | "ELASTIC" | "EXPO" | "LINEAR" | "QUAD" | "QUART" | "QUINT" | "SINE"
/**
 * `DEFAULT`: Only run once
 * `LOOP`: Back and forth
 * `REPEAT`: Repeat the easing
 */
type OGEasingMode = "DEFAULT" | "LOOP" | "REPEAT"
type OGModifierVariableName = "x" | "y" | "z" | "r" | "g" | "b" | "alpha" | "deg"
type OGModifierId<T extends OGModifier<any, any>> = number

/** @noSelf */
interface OGIWidget {

    /**
     * Get the ID of the widget (Even if it's already removed)
     */
    getId(): number
    /**
     * Check the widget's visibility
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    isVisible(): boolean | InternalError
    /**
     * Set the widget's visibility
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setVisible(visible: boolean): void | InternalError
    // (I'm not stupid, I know how inherit works ty don't open a pr or issue for this)
    // I added all those types so people know what modifier types there are 
    /**
     * List all modifiers
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    modifiers <T, V extends string> (): OGModifier<T, V>[] | OGModifierAutoTranslate[] | OGModifierColor[] | OGModifierRotate[] | OGModifierScale[] | OGModifierTranslate[] | InternalError
    /**
     * Remove the widget
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    removeWidget(): boolean | InternalError
    /**
     * Add a color modifier
     * @error Throws internal error of the widget is removed or doesn't exist
     * @return ID/number of the modifier
     */
    addColor(r: number, g: number, b: number, a?: number): OGModifierId<OGModifierColor> | InternalError
    /**
     * Add a translation modifier
     * @error Throws internal error of the widget is removed or doesn't exist
     * @return ID/number of the modifier
     */
    addTranslation(x: number, y: number, z: number): OGModifierId<OGModifierTranslate> | InternalError
    /**
     * Add a rotation modifier
     * @error Throws internal error of the widget is removed or doesn't exist
     * @return ID/number of the modifier
     */
    addRotation(deg: number, x: number, y: number, z: number): OGModifierId<OGModifierRotate> | InternalError
    /**
     * Add a scale modifier
     * @error Throws internal error of the widget is removed or doesn't exist
     * @return ID/number of the modifier
     */
    addScale(x: number, y: number, z: number): OGModifierId<OGModifierScale> | InternalError
    /**
     * Remove a modifier by ID
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    removeModifier(id: OGModifierId<any> | number): void | InternalError
    /**
     * Returns list of all modifiers.
     * Layout:
     * 
     * modifier1: any[]     (array index 0)
     *      id: number                  (array index 0)
     *      type: string                (array index 1)
     *      values: any[]               (array index 2)
     *          *unknown*                   (array index 0)
     *      condition: ConditionType[]  (array index 3) // Condition names
     * 
     * @error Throws internal error of the widget is removed or doesn't exist
     * @deprecated Please use `modifiers()` instead for better typing
     */
    getModifiers(): any[][] | InternalError
    /**
     * Set the condition of a modifier to be applied
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setCondition(modifierId: OGModifierId<any> | number, condition: ConditionType, state: boolean): void | InternalError
    /**
     * Set the easing function of a modifier
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setEasing <V extends string> (modifierId: OGModifierId<OGModifier<any, V>>, type: OGEasingType, typeIO: OGEasingTypeIO, duration: number, variableName: V): void | InternalError
    /**
     * Remove an easing
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    removeEasing <V extends string> (modifierId: OGModifierId<OGModifier<any, V>>, variableName: OGModifierVariableName): void | InternalError
    /**
     * Get the current color value.
     * @error Throws internal error of the widget is removed or doesn't exist
     * @deprecated Please use `modifiers()[id - 1]` instead for better typing
     */
    getColor(modifierId: OGModifierId<OGModifierColor>): LuaMultiReturn<[number, number, number, number]>
    /**
     * 
     * @error Throws internal error of the widget is removed or doesn't exist
     * @deprecated Please use `modifiers()[id - 1]` instead for better typing
     */
    updateModifier(modifierId: OGModifierId<any> | number, values: number[]): boolean | InternalError
    /**
     * Get the real rendering position after translate, auto translate, scale, and rotate
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getRenderPosition(playerName: string, width: number, height: number): Vector3 | InternalError
}

/** @noSelf */
interface OGIAutoTranslateable extends OGIWidget {
    /**
     * Add an auto translate modifier
     * @error Throws internal error of the widget is removed or doesn't exist
     * @return ID/number of the modifier
     */
    addAutoTranslation(x: number, y: number): OGModifierId<OGModifierAutoTranslate> | InternalError
}

/** @noSelf */
interface OGIAlignable extends OGIWidget {
    /**
     * Set the horizontal align
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setHorizontalAlign(align: "LEFT" | "CENTER" | "RIGHT"): void | InternalError
    /**
     * 
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setVerticalAlign(align: "TOP" | "MIDDLE" | "BOTTOM"): void | InternalError
}

/** @noSelf */
interface OGITracker extends OGIWidget {
    /**
     * Set the tracking type to only certain type of target to be tracked
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setTrackingType(trackingType: "NONE" | "ALL" | "ITEM" | "LIVING" | "PLAYER" | "HOSTILE" | "NEUTRAL" | "UNIQUE", radius: number): void | InternalError
    /**
     * Setup a filter, and only tracks entity or items with specific item meta data (ignored if it's entity) and name
     * Leaving type name empty string i.g. "" will disable the filter
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setTrackingFilter(entityOrItemTypeName: string, itemMetaDataIndex?: number): void | InternalError
    /**
     * Add a filter that checks the entity's UUID. Note that the UUID can be player's UUID, which can be obtained [here](https://namemc.com/), and if any mods gives the entity's UUID, you can use them too.
     * @param entityUUID Entity's UUID. Leaving it empty, "none" or "" will remove the UUID filter
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setTrackingEntity(entityUUID?: UUID | "none"): void | InternalError
}

/** 
 * Don't use it if you have completely no idea how computer graphics works
 * @noSelf 
*/
interface OGICustomShape extends OGIWidget {
    /**
     * Set the OpenGL rendering mode, currently only has TRIANGLES and TRIANGLE_STRIP
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setGLMODE(mode: "TRIANGLES" | "TRIANGLE_STRIP"): void | InternalError
    /**
     * Set the shading to SMOOTH or FLAT
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setShading(shading: "SMOOTH" | "FLAT"): void | InternalError
    /**
     * Set the vertex of the vertex index
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setVertex(index: number, x: number, y: number, z: number): void | InternalError
    /**
     * Add an vertex
     * @error Throws internal error of the widget is removed or doesn't exist
     * @return The vertex's index
     */
    addVertex(x: number, y: number, z: number): number | InternalError
    /**
     * Remove the vertex by its index
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    removeVertex(index: number): void | InternalError
    /**
     * Gets the total amount of vertex
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getVertexCount(): number | InternalError
}

/** @noSelf */
interface OGIObjModel extends OGIWidget {
    /**
     * Use an Obj file from a source
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    loadOBJ(source: string): void | InternalError
}

/** @noSelf */
interface OGIResizable extends OGIWidget {
    /**
     * Get the size of the component.
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getSize(): LuaMultiReturn<[number, number]> | InternalError
    /**
     * Set the size of the component
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setSize(x: number, y: number): void | InternalError
}

/** @noSelf */
interface OGITextable extends OGIWidget {
    /**
     * Use a TrueType font. Users must have this font installed!
     * @beta This feature is still in beta
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setFont(fontName: string): void | InternalError
    /**
     * Set the text
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setText(text: string | boolean): void | InternalError
    /**
     * Get the text
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getText(): string | InternalError
    /**
     * Set the anti alias state
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setAntialias(antialias: boolean): void | InternalError
    /**
     * Set the font size of the TrueType font
     * @see {@link setFont}
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setFontSize(size: number): void | InternalError
}

/** @noSelf */
interface OGIItem extends OGIWidget {
    /**
     * Set the display item to a specific item with name and meta data
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setItem(itemName: string, metadata?: number): boolean | InternalError
    /**
     * Get the item of the widget. Returns the unlocalized name of the item
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getItem(): string
}

/** @noSelf */
interface OGIThroughVisibility extends OGIWidget {
    /**
     * Set if the widget is visible through objects
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setVisibleThroughObjects(visibleThroughObjects: boolean): void | InternalError
    /**
     * Set if the widget is visible through objects
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    isVisibleThroughObjects(): boolean | InternalError
}

/** @noSelf */
interface OGIViewDistance extends OGIWidget {
    /**
     * Set the max view distance of the widget
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setViewDistance(distance: number): void | InternalError
    /**
     * Get the view distance of the widget
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getViewDistance(): number | InternalError
    /**
     * Set if the component should always be facing the player
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setFaceWidgetToPlayer(faceWidgetToPlayer: boolean): void | InternalError
}

/** @noSelf */
interface OGILookable extends OGIWidget {
    /**
     * Set which block is the widget facing
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setLookingAt(x: number, y: number, z: number): void | InternalError
    /**
     * Enable or disable the widget facing
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setLookingAt(enabled: boolean): void | InternalError
    /**
     * Get which block is the widget facing
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getLookingAt(): LuaMultiReturn<[number, number, number]> | InternalError
}



/** @noSelf */
interface OGIPrivate extends OGIWidget {
    /**
     * Set the widget's owner by the username
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    setOwner(playerName: string): void | InternalError
    /**
     * Get the widget's owner's player name
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getOwner(): string | InternalError
    /**
     * Get the widget's owner's UUID
     * @error Throws internal error of the widget is removed or doesn't exist
     */
    getOwnerUUID(): UUID | InternalError
}

/////////////// Widgets Types ///////////////

/** @noSelf */
interface OGWidgetGLOverlay extends OGIResizable, OGIPrivate {
    /**
     * [OpenGL] Set the widget's culling state. For more information, you can [look it up](https://www.google.com/search?q=Culling+OpenGL)
     * @implNote It was originally in `OGIWidget`, but moved here since internal OpenGlasses checks if it's instance of WidgetGLOverlay
     * @see https://www.youtube.com/watch?v=BA6aR_5C_BM
     */
    setCulling(culling: boolean): void | InternalError
}

/** @noSelf */
interface OGWidgetGLWorld extends OGWidgetGLOverlay, OGIThroughVisibility, OGIViewDistance, OGILookable {}

/** @noSelf */
interface OGTextWidget extends OGWidgetGLWorld, OGITextable, OGIAlignable {}

/** @noSelf */
interface OGItemIcon extends OGWidgetGLWorld, OGIItem {}

/** @noSelf */
interface OGCustomShape extends OGWidgetGLWorld, OGICustomShape {}

/** @noSelf */
interface OGOBJModelOC extends OGWidgetGLWorld, OGIObjModel {}

/////////////// Widgets Components ///////////////
/** @noSelf */
interface OGCube3D extends OGWidgetGLWorld {}
/** @noSelf */
interface OGText3D extends OGTextWidget {}
/** @noSelf */
interface OGText2D extends OGTextWidget, OGIAutoTranslateable {}
/** @noSelf */
interface OGItem2D extends OGItemIcon, OGIAutoTranslateable, OGIAlignable {}
/** @noSelf */
interface OGItem3D extends OGItemIcon {}
/** @noSelf */
interface OGCustom2D extends OGCustomShape, OGIAutoTranslateable {}
/** @noSelf */
interface OGCustom3D extends OGCustomShape {}
/** @noSelf */
interface OGOBJModel3D extends OGOBJModelOC {}
/** @noSelf */
interface OGOBJModel2D extends OGOBJModelOC, OGIAutoTranslateable {}
/** @noSelf */
interface OGBox2D extends OGWidgetGLOverlay, OGIAutoTranslateable, OGIAlignable {}
/** @noSelf */
interface OGEntityTracker3D extends OGOBJModel3D, OGITracker {}


/** @noSelf */
interface OGRayTracingBlockResult extends Vector3 {
    type: "block",
    name: string,
    meta: number
}
/** @noSelf */
interface OGRayTracingMissedResult {
    type: "air"
}

/**
 * @noSelf
 */
interface ComponentOpenGlassesHost extends IComponent {
    /**
     * Link with a player / multiple players. By leaving no parameters or "" (empty string) as parameter, it will send start linking with everyone that can be linked by the terminal. Here're rules to connect to the player:
     * 1. Distance to the player must be less than 64 (Un-configurable)
     * 2. Player must be wearing Glasses
     * 3. The player must not be connecting to the terminal already
     * 4. The link request must not be sent already
     * @param playerName The player name. Leaving this empty will send link request to everyone that matches the requirement
     * @return First return value indicates if a request has been sent successfully to the target player. If the player doesn't exist, or it doesn't match the rules mentioned above, it will be false, but if the first parameter is empty, it will always return true. The second return value is an array of all players that is receiving a link request.
     */
    startLinking(playerName?: string): LuaMultiReturn<[boolean, string[]]>

    /**
     * Get all connected players. The return value is in this formatting:
     * ---- Main Table ----
     * - player1: any[] (array index 0)
     *   - name: string         (sub-array index 0)
     *   - uuid: UUID           (sub-array index 1)
     *   - screenWidth: number  (sub-array index 2)
     *   - screenHeight: number (sub-array index 3)
     *   - guiScale: double     (sub-array index 4)
     * - player2: any[] (array index 1)
     *   - name... and so on
     */
    getConnectedPlayers(): any[][]

    /**
     * Request a Screen Resolution Event to be sent to the terminal from the linked glasses of the player(s) specified. It will send a packet to the player, and an event will be fired - which means it depends on the ping and the player's internet connection, if the player is not responding to the packet, you won't get an event back.
     * @param playerName Name of the player. Leaving it empty or with an empty string will send request to every players that has connected to the terminal.
     * @return Amount of players that have received the request
     */
    requestResolutionEvents(playerName?: string): void

    /**
     * Set the rendering resolution of a single player specified in the first parameter
     * @return Amount of players that have been set the resolution
     */
    setRenderResolution(playerName: string, width: number, height: number): number

    /**
     * Get the number of widgets that's been added
     */
    getWidgetCount(): number

    /**
     * Remove a widget
     * @param widgetId The ID of the widget, can be obtained with {@link OGIWidget.getID}
     * @return Whether the widget can be found and successfully removed 
     */
    removeWidget(widgetId: number): boolean 

    /**
     * Remove all the widgets
     * @return Is the operation successfully operated
     */
    removeAll(): boolean


    addCube3D(): OGCube3D
    addText2D(): OGText2D
    addText3D(): OGText3D
    addItem2D(): OGItem2D
    addItem3D(): OGItem3D
    addCustom2D(): OGCustom2D
    addCustom3D(): OGCustom3D
    addOBJModel2D(): OGOBJModel2D
    addOBJModel3D(): OGOBJModel3D
    addBox2D(): OGBox2D
    addEntityTracker3D(): OGEntityTracker3D

    /**
     * Gets all true-type fonts on the server. The data can't be used directly - the first 2 element will be a warning message: "this method only returns fonts that are available on the server side" and "client fonts probably differ"
     * The returned font name can be used directly
     * @deprecated you shouldn't use the value returned by this list unless it's single player, or you're sure every player has the same fonts installed
     */
    getFonts(): string[]

    /**
     * Set the terminal's display name that will be shown in OpenGlasses configuration menu and link request menu
     * @return Whether the terminal name has been successfully set or not
     */
    setTerminalName(): boolean

    /**
     * @return Returns the terminal name
     */
    getTerminalName(): string

    /**
     * Set the rendering position mode, can be relative or absolute.
     * If absolute, the center position will be 0, 0, 0 of the world
     * If relative (default value), the center position will be the terminal's location (or the machine with the OpenGlasses card installed)
     */
    setRenderPosition(mode: "absolute" | "relative"): boolean

    /**
     * Get the rendering position mode, can be relative or absolute.
     * @see {@link setRenderPosition}
     */
    getRenderPosition(): "absolute" | "relative"

    /**
     * List all widgets. Can be casted to either LuaTable<string, () => OGIWidget> or LuaTable<string, {getType(): string}>
     */
    widgets(): LuaTable<string, () => OGIWidget> | LuaTable<string, {getType(): string}>

    /**
     * Generates a new component id. All linked glasses will be disconnected
     */
    newUniqueKey(): string

    /**
     * Get the user's position relatively to the center position that can be changed by {@link setRenderPosition} and can be gotten by {@link getRenderPosition}.
     * @warning The machine must have navigation upgrade installed, which can be installed with anvil
     */
    getUserPosition(player: string): Vector3 | InternalError

    /**
     * Get which block is the user looking at, entity is currently not supported.
     * @warning The machine must have navigation upgrade and geolyzer installed, which can be installed with anvil
     */
    getUserLookingAt(player: string): OGRayTracingBlockResult | OGRayTracingMissedResult | InternalError
}



/////////////////// Minecraft Forge (Provided by OpenComputer) ///////////////////

/**
 * @noSelf
 */
interface ComponentForgeEnergyStorage extends IComponent {
    /**
     * Returns the amount of stored energy on the connected side.
     */
    getEnergyStored(): number
    /**
     * Returns the maximum amount of stored energy on the connected side.
     */
    getMaxEnergyStored(): number
    /**
     * Returns whether this component can have energy extracted from the connected side.
     */
    canExtract(): boolean
    /**
     * Returns whether this component can receive energy on the connected side."
     */
    canReceive(): boolean
}

/////////////////// Ender Storage (Provided by OpenComputer) ///////////////////
/**
 * @noSelf
 */
interface ComponentEnderStorageFrequencOwner extends IComponent {
    /**
     * Get the currently set frequency. [left, middle, right]
     */
    getFrequency(): number[]
    /** 
     * Set the frequency. Range 0-15 (inclusive).
     */
    setFrequency(left: number, middle: number, right: number): void
    /**
     * Get the name of the owner, which is usually a player's name or 'global'.
     */
    getOwner(): string
    /**
     * Get the currently set frequency as a table of color names.
     */
    getFrequencyColors(): string[]
    /**
     * Get a table with the mapping of colors (as Minecraft names) to Frequency numbers. NB: Frequencies are zero based!
     */
    getColors(): LuaPairsIterable<number, string>
}

/////////////////// IC2 (Provided by OpenComputer) ///////////////////
/**
 * @noSelf
 */
interface ComponentIC2Energy extends IComponent {
    getCapacity(): number
    getEnergy(): number
    getSinkTier(): number
    getSourceTier(): number
}

/**
 * @noSelf
 */
interface ComponentIC2EnergyConductor extends IComponent {
    getConductionLoss(): number
    getConductorBreakdownEnergy(): number
    getInsulationBreakdownEnergy(): number
    getInsulationEnergyAbsorption(): number
}

/**
 * @noSelf
 */
interface ComponentIC2MassFab extends IComponent {
    getProgress(): number
}

/**
 * @noSelf
 */
interface ComponentIC2Reactor extends IComponent {
    /**
     * Get the reactor's heat.
     */
    getHeat(): number
    /**
     * Get the reactor's maximum heat before exploding.
     */
    getMaxHeat(): number
    /**
     * Get the reactor's energy output. Not multiplied with the base EU/t value.
     */
    getReactorEnergyOutput(): number
    /**
     * Get the reactor's base EU/t value.
     */
    getReactorEUOutput(): number
    /**
     * Get whether the reactor is active and supposed to produce energy.
     */
    producesEnergy(): boolean
}

/**
 * @noSelf
 */
interface ComponentIC2ReactorChamber extends IComponent {
    /**
     * Get the reactor's heat.
     */
    getHeat(): number
    /**
     * Get the reactor's maximum heat before exploding.
     */
    getMaxHeat(): number
    /**
     * Get the reactor's energy output. Not multiplied with the base EU/t value.
     */
    getReactorEnergyOutput(): number
    /**
     * Get the reactor's base EU/t value.
     */
    getReactorEUOutput(): number
    /**
     * Get whether the reactor is active and supposed to produce energy.
     */
    producesEnergy(): boolean
}

/**
 * @noSelf
 */
interface ComponentIC2ReactorRedstonePort extends IComponent {
    /**
     * Get the reactor's heat.
     */
    getHeat(): number
    /**
     * Get the reactor's maximum heat before exploding.
     */
    getMaxHeat(): number
    /**
     * Get the reactor's energy output. Not multiplied with the base EU/t value.
     */
    getReactorEnergyOutput(): number
    /**
     * Get the reactor's base EU/t value.
     */
    getReactorEUOutput(): number
    /**
     * Get whether the reactor is active and supposed to produce energy.
     */
    producesEnergy(): boolean
}


/////////////////// Refined Storage (Provided by Refined Storage) ///////////////////
/**
 * @noSelf
 */
interface RefinedStorageCraftingTask {
    stack: ItemStack,
    missing: ItemStack[],
    missingFluids: Fluid[],
    pattern: RefinedStorageCraftingPattern,
    quantity: number
}

/**
 * @noSelf
 */
interface RefinedStorageCraftingPattern {
    outputs: ItemStack[],
    inputs: ItemStack[],
    processing: boolean,
    oredict: boolean,
    /**
     * Null if it's not a processing pattern
     */
    fluidInputs: Fluid[] | null,
    /**
     * Null if it's not a processing pattern
     */
    fluidOutputs: Fluid[] | null,
    /**
     * Null if it's a processing pattern
     */
    byproducts: ItemStack[]
}

/**
 * @noSelf
 */
interface RefinedStorageCraftingRequestInfo {
    item: ItemStack | null,
    fluid: Fluid | null
}

/**
 * @noSelf
 */
interface RefinedStorageStorage {
    type: "item" | "fluid",
    usage: number,
    capacity: number
}

/**
 * @noSelf
 */
interface ComponentRefinedStorage extends IComponent {
    /**
     * Whether the node is connected.
    */
    isConnected():boolean
        
    /**
     * Gets the energy usage of this network.
    */
    getEnergyUsage():number
        
    /**
     * Gets the crafting tasks of this network.
    */
    getTasks(): RefinedStorageCraftingTask
        
    /**
     * Get one pattern of this network.
    */
    getPattern(stack:ItemStackFilter): RefinedStorageCraftingPattern
        
    /**
     * Get one fluid pattern of this network.
    */
    getFluidPattern(stack:ItemStackFilter): RefinedStorageCraftingPattern
        
    /**
     * Gets the patterns of this network.
    */
    getPatterns(): RefinedStorageCraftingPattern[]
        
    /**
     * Gets the fluid patterns of this network.
    */
    getFluidPatterns(): RefinedStorageCraftingPattern[]
        
    /**
     * Whether a crafting pattern exists for this item.
    */
    hasPattern(stack:ItemStackFilter):boolean
        
    /**
     * Whether a crafting pattern exists for this fluid.
    */
    hasFluidPattern(stack:ItemStackFilter):boolean
        
    /**
     * Schedules a crafting task.
    */
    scheduleTask(stack:ItemStackFilter, count?:  number, canSchedule?:  boolean): RefinedStorageCraftingTask
        
    /**
     * Schedules a fluid crafting task.
    */
    scheduleFluidTask(stack:ItemStackFilter, count?:  number, canSchedule?:  boolean): RefinedStorageCraftingTask
        
    /**
     * Cancels a task and returns the amount of tasks cancelled.
    */
    cancelTask(stack:ItemStackFilter):number
        
    /**
     * Cancels a fluid task and returns the amount of tasks cancelled.
    */
    cancelFluidTask(stack:ItemStackFilter):number
        
    /**
     * Extracts a fluid from the network.
     * @return Transferable amount
    */
    extractFluid(stack:ItemStackFilter, amount?: number, direction?: number): number
        
    /**
     * Gets a fluid from the network.
    */
    getFluid(stack:ItemStackFilter): Fluid
        
    /**
     * Gets a list of all fluids in this network.
    */
    getFluids(): Fluid[]
        
    /**
     * Extracts an item from the network.
     * @return Transferable amount
    */
    extractItem(stack:ItemStackFilter, count?: number, direction?: number): number
        
    /**
     * Gets an item from the network.
    */
    getItem(stack:ItemStackFilter, compareMeta?:boolean, compareNBT?:boolean): ItemStack | null
        
    /**
     * Gets a list of all items in this network.
    */
    getItems(): ItemStack[]
        
    /**
     * Gets a list of all connected storage disks and blocks in this network.
    */
    getStorages(): RefinedStorageStorage[]
}

/**
 * @noSelf
 */
interface Component extends IComponent {

}

//////////////////////////////////////////////////////////////////////
//    _____   _           _                           _ _  __       //
//   |_   _| | |         | |                         | (_)/ _|      //
//     | |   | |__   __ _| |_ ___   _ __ ___  _   _  | |_| |_ ___   //
//     | |   | '_ \ / _` | __/ _ \ | '_ ` _ \| | | | | | |  _/ _ \  //
//    _| |_  | | | | (_| | ||  __/ | | | | | | |_| | | | | ||  __/  //
//   |_____| |_| |_|\__,_|\__\___| |_| |_| |_|\__, | |_|_|_| \___|  //
//                                             __/ |                //
//                                            |___/                 //
//////////////////////////////////////////////////////////////////////

//    _________    ___   ___   ___ ______   ______                _____        __ _                            ______                    _       _   _                 _____              
//   / / ____\ \  |__ \ / _ \ / _ \____  | |  ____|              / ____|      / _| |                          |  ____|                  | |     | | (_)               |_   _|             
//  | | |     | |    ) | | | | | | |  / /  | |__ _ __ ___  ___  | (___   ___ | |_| |___      ____ _ _ __ ___  | |__ ___  _   _ _ __   __| | __ _| |_ _  ___  _ __       | |  _ __   ___   
//  | | |     | |   / /| | | | | | | / /   |  __| '__/ _ \/ _ \  \___ \ / _ \|  _| __\ \ /\ / / _` | '__/ _ \ |  __/ _ \| | | | '_ \ / _` |/ _` | __| |/ _ \| '_ \      | | | '_ \ / __|  
//  | | |____ | |  / /_| |_| | |_| |/ /    | |  | | |  __/  __/  ____) | (_) | | | |_ \ V  V / (_| | | |  __/ | | | (_) | |_| | | | | (_| | (_| | |_| | (_) | | | |_   _| |_| | | | (__ _ 
//  | |\_____|| | |____|\___/ \___//_/     |_|  |_|  \___|\___| |_____/ \___/|_|  \__| \_/\_/ \__,_|_|  \___| |_|  \___/ \__,_|_| |_|\__,_|\__,_|\__|_|\___/|_| |_( ) |_____|_| |_|\___(_)
//   \_\     /_/                                                                                                                                                  |/                      
                                                                                                                                                                                       

// (RIP my hand : (  )