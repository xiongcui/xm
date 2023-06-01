require 'json'
require 'pp'
require 'pathname'
require 'cocoapods'
require "open-uri"

def setup_weapp_sdk!(config = nil)

    project_root = "./"
    if(config != nil && !config.project_root.nil) 
        project_root = config.project_root
    end
    config_path = 'miniapp.json'
    if(config != nil && !config.config_path.nil) 
        config_path = config.config_path
    end
    
    if (!File.exist?(Pathname.new(config_path)))
        Pod::UI.warn("weapp config file #{config_path} isn't exist");
        return
    end

    Pod::UI.info("Reading the weapp config...")
    json = File.read(config_path)
    config = JSON.parse(json)

    sdk_version = config['sdkVersion']
    extended_sdk = config['useExtendedSdk'].nil? ? Hash.new : config['useExtendedSdk']
    wxauth_sdk_version = extended_sdk['WxauthSDK']
    
    if sdk_version.nil?
        Pod::UI.warn("sdkVersion #{config_path} isn't exist in the config file");
        return
    end

    sdk_local_dir_path = Pathname.new(File.expand_path('~')).join(".miniapp")
    unzip_path = sdk_local_dir_path.join("WeAppSDK-#{sdk_version}")
    if !File.exist?(unzip_path)
        # 下载sdk
        sdk_remote_url = "https://dldir1.qq.com/WechatWebDev/donut/ios/#{sdk_version}/WeAppSDK-#{sdk_version}.zip"
        if !File.directory?(sdk_local_dir_path)
            Dir.mkdir(sdk_local_dir_path)
        end
        sdk_local_zip_path = sdk_local_dir_path.join("WeAppSDK-#{sdk_version}.zip")
        Pod::UI.info(sdk_local_zip_path.to_path)
        if !File.exist?(sdk_local_zip_path)
            Pod::UI.info("Downloading the weapp sdk: WeAppSDK-#{sdk_version}.zip...")
            open(sdk_local_zip_path.to_path, 'wb') do |file|
                file << URI.open(sdk_remote_url).read
            end
        end

        # 解压sdk
        Pod::UI.info("Extracting the weapp sdk: WeAppSDK-#{sdk_version}.zip...")
        unzip_file(sdk_local_zip_path.to_path, unzip_path.expand_path()) 
        FileUtils.rm_rf(sdk_local_zip_path.to_path) if File.exist?(sdk_local_zip_path.to_path)
    end

    # 下载身份管理 sdk
    wxauth_sdk_unzip_path = sdk_local_dir_path.join("WxauthSDK-#{wxauth_sdk_version}")
    if wxauth_sdk_version
        if !File.exist?(wxauth_sdk_unzip_path)
            wxauth_sdk_remote_url = "http://dldir1.qq.com/WechatWebDev/miniapp/WxauthSDK-#{wxauth_sdk_version}.zip"
            wxauth_sdk_local_zip_path = sdk_local_dir_path.join("WxauthSDK-#{wxauth_sdk_version}.zip")
            
            if !File.exist?(wxauth_sdk_local_zip_path)
                puts "Downloading WxauthSDK version #{wxauth_sdk_version}..."
                open(wxauth_sdk_local_zip_path.to_path, 'wb') do |file|
                    file << URI.open(wxauth_sdk_remote_url).read
                end
            end

            unzip_file(wxauth_sdk_local_zip_path.to_path, sdk_local_dir_path.to_path)
            FileUtils.rm_rf(wxauth_sdk_local_zip_path.to_path) if File.exist?(wxauth_sdk_local_zip_path.to_path)
        end
    end
 
     
     Pod::UI.info("Pod WeAppSDK")
     pod "WeAppSDK", :path => unzip_path.to_path
 
     extended_sdk.each { |key, value|
         if value && key != "WxauthSDK"
             Pod::UI.info("Pod #{key}")
             pod "WeAppSDK/#{key}", :path => unzip_path.to_path
         end
           
     }
 
     if wxauth_sdk_version
         pod "WxauthSDK", :path => wxauth_sdk_unzip_path.to_path
     end

end



def windows?  
    !(RUBY_PLATFORM =~ /win32/).nil?  
end 

def unzip_file zip_file_path, to_path
    if windows?
      window_unzip_file(zip_file_path, to_path)
    else
      linux_unzip_file(zip_file_path, to_path)
    end
end

def window_unzip_file zip_file_path, to_path
  if File.exist?(zip_file_path)
    Zip::File.open(zip_file_path) do |zip_file|
      zip_file.each do |f|
        f_path = File.join(to_path, f.name)
        FileUtils.rm_rf(f_path) if File.exist?(f_path)
        zip_file.extract(f, f_path) #unless File.exist?(f_path)
      end
    end
 end    
end

def linux_unzip_file zip_file_path, to_path
  zip_path = File.dirname(zip_file_path)
  zip_name = File.basename(zip_file_path)
  system("LANG=en_US.UTF-8;cd #{zip_path};unzip -o #{zip_name} -d #{to_path} > /dev/null 2>&1")
end